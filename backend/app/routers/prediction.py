from fastapi import APIRouter, Depends, HTTPException
import joblib
from mongo.database import english_collection
from mongo import models, schemas
import pandas as pd
from english_model.using_model import predict

import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation


# This is a function needed by the pipeline for predicting the sentiment of a text
nlp = spacy.load("en_core_web_sm")
stopwords = list(STOP_WORDS)
punct = list(punctuation)

def text_data_cleaning(sentence):
    doc = nlp(sentence)
    
    tokens = []
    for token in doc:
        if token.lemma_ != "-PRON-":
            temp = token.lemma_.lower().strip()
        else:
            temp = token.lower_
        tokens.append(temp)
    
    cleaned_tokens = []
    for token in tokens:
        if (token not in stopwords and token not in punct) or token == 'not' :
            cleaned_tokens.append(token)
    return cleaned_tokens


def load_model():
    joblib_in = open("D:/Graduation Project/GP/backend/app/english_model/sentiment_model.joblib","rb")
    model = joblib.load(joblib_in)
    return model

def get_model():
    return load_model()

router = APIRouter(
    prefix="/predict",
    tags=["prediction"],
)

features = ['text']

@router.post("/en")
def predict(model=Depends(get_model)):
    score = model.predict(["Cheese pie was totally different than the photo on the application"])
    return {"score": score}
"""

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
        predictions = predict(X_batch)
        
        # Update MongoDB documents with predictions
        for doc, prediction in zip(documents, predictions):
            english_collection.update_one({'_id': doc['_id']}, {'$set': {'score': prediction}})

        return {"message": "Predictions made and updated successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
"""
