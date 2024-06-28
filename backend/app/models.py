from database import Base
from sqlalchemy import Column, ForeignKey, Integer, String 
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "user"
    # TODO add photo
    
    id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String, nullable=False, unique=True)
    # TODO it doesnt have to be unique and make limits
    username = Column(String, nullable=False, unique=False)
    # TODO 2 -> hashing and make limits
    password = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    
    
    # Relationships
    brands = relationship("Brand", back_populates="user") # bi-directional
    
class Brand(Base):
    __tablename__ = "brand"
    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(Integer, ForeignKey("user.id"))
    name = Column(String, nullable=False, unique=True)
    alt_names = relationship("Altname",back_populates="brand")
    
    # Relationships 
    user = relationship("User", back_populates="brands")     # one to many

class Altname(Base):
    __tablename__ = "altname"
    id = Column(Integer, primary_key=True, nullable=False)
    brand_id = Column(Integer, ForeignKey("brand.id"))
    altname = Column(String, nullable=False, unique=True)
    
    # Relationships
    brand = relationship("Brand", back_populates="alt_names")

    
    
