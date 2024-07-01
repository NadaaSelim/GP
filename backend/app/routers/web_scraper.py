from fastapi import APIRouter
from mongo import models, schemas
from mongo.database import collection_name




router = APIRouter(
    prefix="/scrape",
    tags=["Scraper"],
)

@router.post("/review")
def post_todo(review: models.Review):
    collection_name.insert_one(dict(review))
    

# api to get arabic reviews and store in db
# api to get english reviews