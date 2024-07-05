from fastapi import APIRouter, Depends, HTTPException, status
from mongo.database import english_collection
import models, oauth2, schemas
from database import get_db
import pandas as pd
from lifespan import ml_models
from sqlalchemy.orm import Session





router = APIRouter(
    prefix="/predict",
    tags=["prediction"],
)

features = ['text']


@router.get("/en")
def predict():
    
    # Predict the sentiment
    prediction = ml_models["en"].predict(["The pizza was very cold"])

    # Print the sentiment
    sentiment_label = "positive" if prediction[0] == 1 else "negative"
    
    
    return{"score":sentiment_label}


@router.post("/en/{brand_name}/{platform}", status_code=status.HTTP_201_CREATED, response_model=schemas.AnalysisOut)
def predict_en(brand_name: str, platform: str, db:Session = Depends(get_db), current_user: int =Depends(oauth2.get_current_user)):
    try:
        brand = db.query(models.Brand).filter(models.Brand.name==brand_name).first()
        # Fetch data from MongoDB
        documents = list(english_collection.find({ 'brand_id': brand.id ,'platform': platform},{'_id': 1,'text': 1}))
        
        if not documents:
            raise HTTPException(status_code=404, detail="No documents found in the collection")

        # Convert MongoDB documents to DataFrame
        df = pd.DataFrame(documents)
        
        # Ensure the DataFrame has the required features
        if not all(feature in df.columns for feature in features):
            raise HTTPException(status_code=400, detail=f"Input data must contain the following features: {features}")

        # Prepare the data for prediction
        X_batch = df['text']
        #print(X_batch.shape)
        #print(type(X_batch))

        # Make predictions
        predictions = ml_models["en"].predict(X_batch)
        
        positive = 0
        negative = 0 
        num_reviews = X_batch.shape[0]
        
        count_sample_negative = 0
        count_sample_positive = 0
        sample_reviews = []
        # Update MongoDB documents with predictions
        for doc, prediction in zip(documents, predictions):
            if prediction == 1:
                positive += 1
                if count_sample_positive < 5 :
                    sample_reviews.append(
                        models.Review(text=doc['text'],score=prediction)
                    )
                    count_sample_positive += 1
                
                
            else:
                negative += 1
                if count_sample_negative < 5 :
                    sample_reviews.append(
                        models.Review(text=doc['text'],score=prediction)
                    )
                    count_sample_negative += 1
                
            english_collection.update_one({'_id':  doc['_id']}, {'$set': {'score': int(prediction)}})
            
        # add analysis to db
        new_analysis = models.Analysis(
            brand_id=brand.id,
            positive=positive,
            negative=negative,
            num_reviews=num_reviews,
            platform=platform,
            language='en'
        )
        
        new_analysis.reviews.extend(sample_reviews)
        db.add(new_analysis)
        db.commit()
        db.refresh(new_analysis)
        return new_analysis
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

