from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session

# TODO -> import issue
import oauth2
import schemas, models, utils

from database import get_db


router = APIRouter(
    prefix="/auth",
    tags=["authentication"],
)

# TODO strong password
# TODO captilize Name
@router.post("/signup", status_code=status.HTTP_201_CREATED, response_model=schemas.UserOut)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):

    # hash the password - user.password
    hashed_password = utils.hash(user.password)
    user.password = hashed_password
    
    # TODO change this decrapted function
    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

@router.post("/login")
def login(user_cred: schemas.UserLogin, db: Session = Depends(get_db)):
    
   user = db.query(models.User).filter(models.User.email == user_cred.email).first()
   # wrong email
   if not user:
       raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Invalid Credentials")
   
   # wrong password
   if not utils.verify(user_cred.password, user.password):
       raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Invalid Credentials")
   
   # token 
   access_token = oauth2.create_access_token(data= {"uid":user.id})
    
   return {"access_token": access_token, "token_type": "bearer"}
    
    