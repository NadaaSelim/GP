import joblib
from utils import text_data_cleaning

# Load the model, replace the path with complete path of the model
model = joblib.load('D:/Graduation Project/GP/backend/app/english_model/sentiment_model.joblib')

def predict(batch):
    return model.predict(batch)

while True:
    # Get user input
    user_input = input('Enter a text: ')
    
    # Predict the sentiment
    prediction = predict([user_input])
    
    # Print the sentiment
    sentiment_label = "positive" if prediction[0] == 1 else "negative"
    print(f"The sentiment of the text is: {sentiment_label}")


