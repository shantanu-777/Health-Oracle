
# Health Oracle

**Health Oracle** is a comprehensive healthcare prediction platform combining machine learning with an intuitive web interface. This application enables users to predict the likelihood of heart disease, lung cancer, and diabetes, using models trained on relevant datasets. It integrates a React-based frontend with a Flask backend, offering seamless interaction and powerful backend computation.

---

## Project Structure

The repository is structured as follows:

```
Health-Oracle/
├── backend/
│   ├── app.py                  # Main backend application managing routes and API endpoints
│   ├── models.py               # Machine learning model loading and prediction logic
│   ├── utilities.py            # Utility functions for preprocessing and data handling
│   ├── requirements.txt        # Python dependencies
│   ├── static/                 # Static assets like images or CSS
│   ├── templates/              # Jinja2 HTML templates
│   └── ...
├── colab_files_to_train_models/
│   ├── heart_disease_model.ipynb  # Notebook to train heart disease prediction model
│   ├── lung_cancer_model.ipynb    # Notebook to train lung cancer prediction model
│   ├── diabetes_model.ipynb       # Notebook to train diabetes prediction model
│   └── ...
├── dataset/
│   ├── heart_disease.csv       # Dataset for heart disease
│   ├── lung_cancer.csv         # Dataset for lung cancer
│   ├── diabetes.csv            # Dataset for diabetes
│   └── ...
├── frontend/
│   ├── public/                 # Static files for React
│   ├── src/                    # React components and logic
│   ├── package.json            # Node.js dependencies
│   ├── .env                    # Environment variables for frontend
│   └── ...
├── saved_models/
│   ├── heart_disease_model.pkl # Pre-trained model for heart disease
│   ├── lung_cancer_model.pkl   # Pre-trained model for lung cancer
│   ├── diabetes_model.pkl      # Pre-trained model for diabetes
│   └── ...
├── README.md                   # Documentation
└── ...
```

---

## Key Features

### Prediction Models:
- **Heart Disease**: Predicts the risk based on health metrics.
- **Lung Cancer**: Assesses cancer probability using relevant datasets.
- **Diabetes**: Evaluates diabetes likelihood.

### Web Integration:
- **React Frontend**: A modern, responsive interface for input and results visualization.
- **Flask Backend**: Efficient handling of predictions and API requests.

---

## Backend Details

**Framework**: Flask

### Key Routes:
- **`/predict`**: Receives user input and returns predictions for the selected condition.
- **`/train`**: Allows admins to retrain models using updated datasets.

### Core Functions:
- **Data Preprocessing**: Converts user input into model-compatible formats.
- **Prediction Logic**: Utilizes saved models to generate predictions.
- **Model Handling**: Includes utilities for loading, saving, and updating models.

---

## Frontend Details

**Framework**: React  
**Styling**: Tailwind CSS and Bootstrap  

### Key Features:
- User-friendly interface for entering health metrics.
- Dynamic results display.
- API communication via Axios for prediction requests.

---

## Installation and Usage

### Clone the Repository:
```bash
git clone https://github.com/shantanu-777/Health-Oracle.git
cd Health-Oracle
```

### Backend Setup:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv venv
   venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the Flask backend server:
   ```bash
   python app.py
   ```

### Frontend Setup:
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React frontend server:
   ```bash
   npm run dev
   ```

### Access the Application:
Open your browser and navigate to `http://localhost:3000`.

---

## Training the Models

To train the models, use the Jupyter notebooks in the `colab_files_to_train_models/` directory. Ensure the datasets are available in the `dataset/` folder before starting the training process.

---

## Dependencies

### Python (Backend):
- Flask
- Scikit-learn
- Pandas
- NumPy

### JavaScript (Frontend):
- React
- Axios
- Bootstrap

---

## Contributing

Contributions are welcome! Fork the repository, make changes, and submit a pull request. Ensure your code adheres to project standards.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- **Flask**: Backend framework.
- **React**: Frontend framework.
- **Scikit-learn**: Machine learning library.
- **Bootstrap**: Styling framework.

