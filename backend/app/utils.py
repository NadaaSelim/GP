import joblib
from passlib.context import CryptContext
from password_strength import PasswordPolicy
from fastapi import HTTPException

policy = PasswordPolicy.from_names(
    length=8,  # Minimum length: 8
    uppercase=1,  # Must have at least 1 uppercase letters
    numbers=1,  # Must have at least 1 digits
    special=1,  # Must have at least 1 special characters
    nonletters=0,  # Can have 0 or more non-letter characters (digits, specials, anything)
) 

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def validate_password(password: str):
    errors = policy.test(password)
    if errors :
        raise ValueError("Password not strong enough")
    
    return True
def hash(password: str):
    return pwd_context.hash(password)


def verify(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


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




