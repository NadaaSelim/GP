from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import List, Optional


from pydantic.types import conint


class UserOut(BaseModel):
    id: int
    email: EmailStr
    username: str
    created_at: datetime

    class Config:
        from_attributes = True


class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str
    
class UserLogin(BaseModel):
    email: EmailStr
    password: str
    
    
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    id: Optional[int] = None
    
class Altname(BaseModel):
    altname: str
    
class Brand(BaseModel):
    name: str
    alt_names: List[Altname]
    
class BrandCreate(BaseModel):
    pass
    

    
    
