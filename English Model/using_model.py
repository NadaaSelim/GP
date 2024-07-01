import joblib
from needed_fucntions import text_data_cleaning

# Load the model, replace the path with complete path of the model
model = joblib.load('/home/nada/Personal/English-Model/THE MODEL/sentiment_model.joblib')

while True:
    # Get user input
    user_input = input('Enter a text: ')
    
    # Predict the sentiment
    prediction = model.predict([user_input])
    
    # Print the sentiment
    sentiment_label = "positive" if prediction[0] == 1 else "negative"
    print(f"The sentiment of the text is: {sentiment_label}")
