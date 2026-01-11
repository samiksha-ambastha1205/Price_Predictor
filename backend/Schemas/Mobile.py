from pydantic import BaseModel

class Mobile(BaseModel):
    Brand:float
    Memory:float
    Storage:float
    Rating:float