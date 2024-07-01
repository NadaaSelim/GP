from pymongo.mongo_client import MongoClient
from config import settings

uri = f"mongodb+srv://{settings.mongo_username}:{settings.mongo_password}@{settings.mongo_hostname}/?appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri)

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
    
mongo_db = client.reviews_db
collection_name = mongo_db["English_collection"]
