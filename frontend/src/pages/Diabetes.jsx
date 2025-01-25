/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // To handle navigation
import '../styles/Diabetes.css';

function Diabetes() {
  const [formData, setFormData] = useState({
    Age: '',
    BloodPressure: '',
    BMI: '',
    Insulin: '',
    Glucose: '',
    DiabetesPedigreeFunction: '',
    SkinThickness: '',
    Pregnancies: '',
    Outcome: ''
  });

  const [result, setResult] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/diabetes_prediction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data.result || data.error);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const navigateToDashboard = () => {
    history.push('/dashboard'); // Navigate to the Dashboard page
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-gradient">
      <div className="row w-100 justify-content-center">
        <div className="col-lg-8 text-center mb-4">
          <h1 className="display-4 fw-bold text-light">Diabetes Prediction</h1>
          <p className="lead text-light">
            Enter your health details below to predict the likelihood of diabetes based on advanced medical data.
          </p>
        </div>
      </div>

      <div className="row w-100 justify-content-center">
        {/* Form Card */}
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm border-0 form-card">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit} className="form-scroll">
                {Object.keys(formData).map((key) => (
                  <div key={key} className="mb-3">
                    <label htmlFor={key} className="form-label">
                      {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                    </label>
                    <input
                      type="text"
                      id={key}
                      name={key}
                      className="form-control"
                      value={formData[key]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary rounded-pill py-2">
                    Predict
                  </button>
                </div>
              </form>
              {result && <p className="mt-3 text-primary fs-5 fw-bold text-center">{result}</p>}
            </div>
          </div>
        </div>

        {/* Applications Card */}
        <div className="col-md-5 mb-4 slide-in">
          <div className="card shadow-sm border-0 form-card">
            <div className="card-body p-4">
              <h2 className="text-light">Applications of Diabetes Prediction Model</h2>
              <ul className="text-light text-start mt-3">
                <li>Early detection of diabetes in high-risk individuals.</li>
                <li>Helping healthcare providers with timely interventions.</li>
                <li>Monitoring changes in risk levels over time.</li>
                <li>Promoting preventive measures and healthier lifestyles.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Button */}
      <div className="d-flex justify-content-center mt-4">
        <button
          onClick={navigateToDashboard}
          className="btn btn-secondary rounded-pill py-2 px-4"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Diabetes;
