from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from database import get_db
import models, schemas, oauth2


router = APIRouter(
    prefix="/user",
    tags=["user"],
)

# get user info 
@router.get("/userinfo", response_model=schemas.UserOut)
def get_userinfo(db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    return current_user

@router.get("/userbrands", response_model=schemas.UserBrands)
def get_userbrands(db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    return current_user

