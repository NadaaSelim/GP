from fastapi import APIRouter, Depends, HTTPException
from mongo.database import english_collection
from mongo import models, schemas
import pandas as pd
from lifespan import ml_models





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


@router.post("/en")
def predict_en():
    try:
        # Fetch data from MongoDB
        documents = list(english_collection.find({}, { 'brand_name':'House of Donuts' },{'_id': 1,'text': 1}))
        
        if not documents:
            raise HTTPException(status_code=404, detail="No documents found in the collection")

        # Convert MongoDB documents to DataFrame
        df = pd.DataFrame(documents)
        
        # Ensure the DataFrame has the required features
        if not all(feature in df.columns for feature in features):
            raise HTTPException(status_code=400, detail=f"Input data must contain the following features: {features}")

        # Prepare the data for prediction
        X_batch = df[features]
        print(X_batch)

        # Make predictions
        predictions = ml_models["en"].predict(X_batch)
        
        # Update MongoDB documents with predictions
        for doc, prediction in zip(documents, predictions):
            english_collection.update_one({'_id': doc['_id']}, {'$set': {'score': prediction}})

        return {"message": "Predictions made and updated successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

