import pandas as pd

data = pd.read_csv("ar_reviews.csv")
data = data.drop_duplicates()
data.to_csv("ar_reviews.csv", index=False)

data = pd.read_csv("eng_reviews.csv")
data = data.drop_duplicates()
data.to_csv("eng_reviews.csv", index=False)
