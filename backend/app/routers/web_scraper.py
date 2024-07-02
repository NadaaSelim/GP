from fastapi import APIRouter
from mongo import models, schemas
from mongo.database import english_collection




router = APIRouter(
    prefix="/scrape",
    tags=["Scraper"],
)

@router.post("/review")
def post_todo(review: models.Review):
    english_collection.insert_one(dict(review))
    

# api to get arabic reviews and store in db
# api to get english reviews