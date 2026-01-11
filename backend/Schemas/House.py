from pydantic import BaseModel

class House(BaseModel):
    area: float
    bedrooms: int
    bathrooms:int
    stories:int
    mainroad:int
    guestroom:int
    basement:int
    hotwaterheating:int
    airconditioning:int
    parking:int
    prefarea:int
    furnishingstatus:int