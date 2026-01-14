from fastapi import FastAPI
import uvicorn
import numpy as np
from Schemas.House import House
from Schemas.Car import Car
from Schemas.Laptop import Laptop
from Schemas.Mobile import Mobile
import pickle
from fastapi.middleware.cors import CORSMiddleware
car_model = pickle.load(open("car_model.pkl", 'rb'))
house_model = pickle.load(open("house_model.pkl", 'rb'))
laptop_model = pickle.load(open("laptop_model.pkl", 'rb'))
mobile_model = pickle.load(open("mobile_model.pkl", 'rb'))

app = FastAPI()
@app.get("/")
def root():
    return {"message": "price predictor"}
origins = [
    "https://price-predictor-2-w2uo.onrender.com",
    "https://price-predictor-2-w2uo.onrender.com/predictprice"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    )
#perdiction api for cars
@app.post("/predictCar")
def predictCar(data:Car):
    data = data.dict()
    km_driven=data['km_driven']
    fuel=data['fuel']
    seller_type=data['seller_type']
    transmission=data['transmission']
    owner=data['owner']
    age=data['age']
    km_driven = float(km_driven)
    fuel = int(fuel)
    seller_type = int(seller_type)
    transmission = int(transmission)
    owner = int(owner)
    age = float(age)
    prediction = car_model.predict(np.array([[km_driven, fuel, seller_type, transmission, owner, age]]))
    return float(np.expm1(prediction[0]))

@app.post("/predictmobile")
def predictMobile(data:Mobile):
    data = data.dict()
    Brand = data['Brand']
    Memory = data['Memory']
    Storage = data['Storage']
    Rating = data['Rating']
    
    prediction = mobile_model.predict(np.array([[np.log1p(Brand), np.log1p(Memory), np.log1p(Storage), np.log1p(Rating)]]))
    return float(np.expm1(prediction[0]))

@app.post("/predictHouse")
def predictHouse(data:House):
    data = data.dict()
    
    area= data['area']
    bedrooms =data['bedrooms']
    bathrooms=data['bathrooms']
    stories=data['stories']
    mainroad=data['mainroad']
    guestroom=data['guestroom']
    basement=data['basement']
    hotwaterheating=data['hotwaterheating']
    airconditioning=data['airconditioning']
    parking=data['parking']
    prefarea=data['prefarea']
    furnishingstatus=data['furnishingstatus']

    prediction = house_model.predict(np.array([[np.log1p(area), bedrooms, bathrooms,stories, mainroad, guestroom, basement, hotwaterheating, airconditioning,parking, prefarea, furnishingstatus]]))
    return float(np.expm1(prediction[0]))


@app.post("/predictLaptop")
def predictLaptop(data:Laptop):
    data = data.dict()
    ScreenSize = data['ScreenSize']
    RAM=data['RAM']
    OperatingSystemVersion=data['OperatingSystemVersion']
    Weight=data['Weight']
    Category2in1Convertible=data['Category2in1Convertible']
    Category_Gaming=data['Category_Gaming']
    Category_Netbook=data['Category_Netbook']
    Category_Notebook=data['Category_Notebook']
    Category_Ultrabook=data['Category_Ultrabook']
    Category_Workstation=data['Category_Workstation']
    x_res=data['x_res']
    y_res=data['y_res']
    isApple=data['isApple']
    isTouchScreen=data['isTouchScreen']
    cpu_tier=data['cpu_tier']
    ssd_gb=data['ssd_gb']
    hdd_gb=data['hdd_gb']
    gpu_power=data['gpu_power']
    has_dgpu=data['has_dgpu']
    isMac=data['isMac']
    

    prediction = laptop_model.predict(np.array([[ScreenSize, RAM, OperatingSystemVersion, Weight, Category2in1Convertible, Category_Gaming, Category_Netbook, Category_Notebook, Category_Ultrabook, Category_Workstation, x_res, y_res, isApple, isTouchScreen, cpu_tier, ssd_gb, hdd_gb, gpu_power, has_dgpu, isMac]]))
    return float(np.expm1(prediction[0]))    
    
