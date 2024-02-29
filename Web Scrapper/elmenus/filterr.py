import pandas as pd

from langdetect import detect
def detect_language(text):
    try:
        lang = detect(text)
    except:
        lang = 'unknown'
    return lang

def filter(df):
    arabic_reviews_df = df[df['Review'].apply(lambda x: detect_language(x) == 'ar')]
    english_reviews_df = df[df['Review'].apply(lambda x: detect_language(x) == 'en')]
    arabic_reviews_df.to_csv("ar_reviews.csv", mode='a',index=False,encoding='utf-8-sig')
    english_reviews_df.to_csv("eng_reviews.csv",mode='a', index=False)


column_names = ['Restaurant', 'Customer', 'Date', 'Rating', 'Review']
df = pd.read_csv("newreviews.csv",names=column_names)
#print(df)


