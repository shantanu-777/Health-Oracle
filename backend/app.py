from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import numpy as np
import os

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Set the path to the models folder
models_folder = os.path.join(os.path.dirname(__file__), 'saved_models')

# Update model loading paths
diabetes_model_path = os.path.join(models_folder, 'diabetes_model.sav')
heart_model_path = os.path.join(models_folder, 'heart_disease_model.sav')
kidney_model_path = os.path.join(models_folder, 'kidney.pkl')

# Load your models
with open(diabetes_model_path, 'rb') as f:
    diabetes_model = pickle.load(f)

with open(heart_model_path, 'rb') as f:
    heart_model = pickle.load(f)

with open(kidney_model_path, 'rb') as f:
    kidney_model = pickle.load(f)

@app.route('/api/diabetes', methods=['POST'])
def diabetes():
    data = request.get_json()
    features = np.array([list(data.values())])
    prediction = diabetes_model.predict(features)
    return jsonify({'result': 'Diabetic' if prediction[0] else 'Not Diabetic'})

@app.route('/api/heart_disease', methods=['POST'])
def heart_disease():
    data = request.get_json()
    features = np.array([list(data.values())])
    prediction = heart_model.predict(features)
    return jsonify({'result': 'Heart Disease' if prediction[0] else 'No Heart Disease'})

@app.route('/api/kidney_disease', methods=['POST'])
def kidney_disease():
    data = request.get_json()
    features = np.array([list(data.values())])
    prediction = kidney_model.predict(features)
    return jsonify({'result': 'Kidney Disease' if prediction[0] else 'No Kidney Disease'})

if __name__ == '__main__':
    app.run(debug=True)
