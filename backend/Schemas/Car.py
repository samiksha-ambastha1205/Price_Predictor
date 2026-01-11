from pydantic import BaseModel

class Car(BaseModel):
    km_driven:float
    fuel:int
    seller_type:int
    transmission:int
    owner:int
    age:float