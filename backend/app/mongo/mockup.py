import pandas as pd
from database import english_collection

column_to_field_mapping = {

    'Review': 'text',
    
}

df = pd.read_csv('D:\Graduation Project\GP\Web Scrapper\eng_reviews.csv')
print(f"Number of rows loaded: {len(df)}")


data = []
for _, row in df.iterrows():
    document = {new_field: row[old_field] for old_field, new_field in column_to_field_mapping.items()}
    data.append(document)
    
    
english_collection.insert_many(data)