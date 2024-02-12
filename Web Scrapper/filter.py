import pandas as pd
from langdetect import detect

def removeEmptyReviews():
    # Load the CSV data into a DataFrame
    df = pd.read_csv('newreviews.csv')

    filtered_df = df[df['Review'].notna() & (df['Review'] != '')]

    # Save the filtered data to a new CSV file
    filtered_df.to_csv('new_filtered.csv', index=False,encoding='utf-8-sig')


# Function to detect the language of a text
def detect_language(text):
    try:
        lang = detect(text)
    except:
        lang = 'unknown'
    return lang

removeEmptyReviews()
df = pd.read_csv('new_filtered.csv')
arabic_reviews_df = df[df['Review'].apply(lambda x: detect_language(x) == 'ar')]
english_reviews_df = df[df['Review'].apply(lambda x: detect_language(x) == 'en')]

arabic_reviews_df.to_csv('ar_reviews.csv', mode='a',index=False,encoding='utf-8-sig')

english_reviews_df.to_csv('eng_reviews.csv',mode='a', index=False)