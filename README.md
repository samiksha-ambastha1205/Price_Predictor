# Price Predictor

A full-stack machine learning web application that predicts prices for multiple categories including houses, cars, laptops, and mobile phones. The project combines a React frontend with a FastAPI backend and uses custom-built machine learning algorithms implemented from scratch.

The application allows users to enter product or property specifications and instantly receive predicted market prices through an interactive web interface.

---

## Features

* House price prediction
* Car price prediction
* Laptop price prediction
* Mobile phone price prediction
* Interactive React frontend
* FastAPI REST API backend
* Custom machine learning models built without external ML libraries
* Ensemble learning using a stacking regressor architecture
* Real-time prediction responses
* Model serialization using Pickle

---

## Tech Stack

### Frontend

* React.js
* Axios
* HTML/CSS
* JavaScript

### Backend

* FastAPI
* Uvicorn
* NumPy
* Pandas
* Pickle

### Machine Learning

Custom implementations of:

* Linear Regression
* Weighted KNN Regressor
* Decision Tree Regressor
* Random Forest Regressor
* Stacking Regressor

---

## How It Works

The system uses a custom ensemble learning pipeline for prediction.

### Base Models

The application trains multiple independent models:

* Linear Regression
* Weighted KNN
* Random Forest

### Meta Model

Predictions from the base models are combined using a final Linear Regression model acting as a judge or meta learner.

This stacking approach improves overall prediction accuracy and stability.

---

## Prediction Categories

### House Price Prediction

Predicts property prices using parameters such as:

* Area
* Number of bedrooms
* Bathrooms
* Stories
* Parking availability
* Furnishing status
* Air conditioning
* Basement and guest room availability

### Car Price Prediction

Predicts car resale prices using:

* Kilometers driven
* Fuel type
* Transmission
* Seller type
* Ownership history
* Vehicle age

### Laptop Price Prediction

Uses hardware specifications such as:

* RAM
* Screen size
* Storage
* GPU power
* CPU tier
* Resolution
* Touchscreen support
* Operating system

### Mobile Price Prediction

Predicts smartphone prices using:

* Brand
* Memory
* Storage
* User ratings

---

## Project Architecture

The project follows a full-stack architecture:

* React frontend for collecting user inputs
* FastAPI backend for handling API requests
* Custom machine learning models for predictions
* Pickle-based model persistence for deployment

The frontend communicates with the backend using REST APIs and displays predictions in real time.

---

## Performance

The models were trained and evaluated on cleaned datasets with strong prediction accuracy.

### Example House Model Performance

* R² Score: 0.9933
* Average Error (MAE): ₹46,927
* Accuracy: 99.35%

The stacking regressor significantly improves prediction quality by combining multiple learning approaches.

---

## API Endpoints

The backend provides separate endpoints for:

* House price prediction
* Car price prediction
* Laptop price prediction
* Mobile price prediction

Each endpoint accepts structured input parameters and returns a predicted price value.

---

## CORS Support

CORS middleware is configured in the backend to allow secure communication between the React frontend and FastAPI server during deployment.

---

## Model Persistence

All trained models are stored using Pickle serialization, making them easy to load and deploy in production environments.

---

## Future Improvements

* User authentication system
* Cloud deployment
* Docker support
* Better UI/UX enhancements
* Additional datasets for training
* Advanced visualization dashboards
* Feature importance analysis
* Improved model optimization and validation

---

## Learning Outcomes

This project demonstrates:

* Full-stack machine learning integration
* Building custom ML algorithms from scratch
* Ensemble learning concepts
* REST API development with FastAPI
* Frontend-backend communication
* Model deployment workflow
* Data preprocessing and feature engineering

---

