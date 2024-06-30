from fastapi import APIRouter, status, Depends
from sqlalchemy.orm import Session

from database import get_db
import models, schemas, oauth2


router = APIRouter(
    prefix="/brand",
    tags=["brand"],
)

# TODO what schema will i return
@router.post("/add",status_code=status.HTTP_201_CREATED, response_model=schemas.Brand)
def create_brand(brand: schemas.Brand, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    # TODO find alternative for .dict()
    
    new_brand = models.Brand(user_id=current_user.id,
                             name=brand.name,
                             )
    new_brand.alt_names =  [models.Altname(altname=alt_names.altname) for alt_names in brand.alt_names]
    db.add(new_brand)
    db.commit()
    db.refresh(new_brand)
    
    return new_brand

# Remove brand
# add alt name
# remove alt name