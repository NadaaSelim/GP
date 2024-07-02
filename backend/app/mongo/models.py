from pydantic import BaseModel

from enum import Enum
from typing import Optional

class Platform(str, Enum):
    TWITTER = "Twitter"


class Review(BaseModel):
    text: str
    brand_id: int
    platform: Platform
    time: str
    score: int