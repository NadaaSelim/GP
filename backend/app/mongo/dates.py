from pymongo import MongoClient
from datetime import datetime, timedelta
import random

from database import english_collection

# Filter documents
documents = list(english_collection.find({"brand_id": 5, "platform": "Twitter"}))

# Number of documents
total_docs = len(documents)
if total_docs == 0:
    print("No documents found.")
    exit()

# Calculate the number of documents per month
months = [
    ("January", 31), ("February", 28), ("March", 31), ("April", 30),
    ("May", 31), ("June", 30), ("July", 31), ("August", 31),
    ("September", 30), ("October", 31), ("November", 30), ("December", 31)
]

docs_per_month = total_docs // len(months)
extra_docs = total_docs % len(months)

# Generate random dates for each month
dates = []
for i, (month, days) in enumerate(months):
    month_dates = [datetime(2023, i+1, day) for day in range(1, days+1)]
    random.shuffle(month_dates)
    dates.extend(month_dates[:docs_per_month])

# Distribute extra documents (if any)
if extra_docs > 0:
    remaining_dates = [
        datetime(2023, i+1, day) 
        for i, days in enumerate([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31])
        for day in range(1, days+1) if datetime(2023, i+1, day) not in dates
    ]
    random.shuffle(remaining_dates)
    dates.extend(remaining_dates[:extra_docs])

# Shuffle dates to ensure randomness
random.shuffle(dates)

# Update documents
for i, doc in enumerate(documents):
    formatted_date = dates[i].strftime("%d %B %Y")
    english_collection.update_one({"_id": doc["_id"]}, {"$set": {"time": formatted_date}})
    print(f"Updated document {i+1}/{total_docs} with date {formatted_date}")

print("All documents updated.")
