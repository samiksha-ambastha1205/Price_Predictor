from scripts.Regressor import MyStackingRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error, mean_absolute_percentage_error
import pickle
import numpy as np
import pandas as pd

filename = "Datasets/mobile_cleaned.csv"

df = pd.read_csv(filename)
#df.drop(['cpuSpeed'], axis=1, inplace=True) #only for when training laptop

print(df.drop('selling_price', axis=1).columns.tolist())
print("Number of features:", df.drop('selling_price', axis=1).shape[1])



X = df.drop('selling_price', axis=1).values
y = df['selling_price'].values

# Split Data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and Train Stacking Model
stack_model = MyStackingRegressor()
stack_model.fit(X_train, y_train)

# Predict
print("\n Making Final Predictions...")
final_preds = stack_model.predict(X_test)

y_test_real = np.expm1(y_test)
y_pred_real = np.expm1(final_preds)

# Evaluation Metrics
r2 = r2_score(y_test_real, y_pred_real)
mae = mean_absolute_error(y_test_real, y_pred_real)
mape = mean_absolute_percentage_error(y_test_real, y_pred_real)

print(f"\n Model Performance:")
print(f"   R2 Score:      {r2:.4f}")
print(f"   Avg Error (MAE): ₹{mae:,.0f}")
print(f"   MAPE:          {mape:.4f}")
print(f"   Accuracy:      {1 - mape:.4f}")

print("\n--- First 10 Examples ---")
print(f"{'Real Price':<15} | {'Predicted':<15} | {'Difference':<15}")
print("-" * 50)

for i in range(10):
    real = y_test_real[i]
    pred = y_pred_real[i]
    diff = abs(real - pred)
    print(f"{real:,.0f}{'':<8} | {pred:,.0f}{'':<8} | {diff:,.0f}")




pkl_filename = "mobile_model.pkl" 

print(f"\n💾 Saving Model to '{pkl_filename}'...")

with open(pkl_filename, 'wb') as file:
    pickle.dump(stack_model, file)

print(f"✅ Success! Model saved. You can now move this file to your website backend.")