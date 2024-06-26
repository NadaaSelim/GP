from fastapi import APIRouter, status

from database import get_db
import models, schemas


router = APIRouter(
    prefix="/brand",
    tags=["brand"],
)

# TODO what schema will i return
# @router.post("/add",status_code=status.HTTP_201_CREATED, response_model=schemas)