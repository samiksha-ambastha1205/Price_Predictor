from pydantic import BaseModel

class Laptop(BaseModel):
    ScreenSize:float
    RAM:int
    OperatingSystemVersion:int
    Weight:float 
    Category2in1Convertible:int
    Category_Gaming:int
    Category_Netbook:int
    Category_Notebook:int
    Category_Ultrabook:int
    Category_Workstation:int
    x_res:int
    y_res:int
    isApple:int
    isTouchScreen:int
    cpu_tier:int
    ssd_gb:int
    hdd_gb:int
    gpu_power:float
    has_dgpu:int
    isMac:int