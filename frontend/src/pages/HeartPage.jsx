/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HeartPage.css'; // Ensure this includes additional custom styles if needed

const HeartPage = () => {
  const [formData, setFormData] = useState({
    Age: '',
    Sex: '',
    Cp: '',
    Trestbps: '',
    Chol: '',
    Fbs: '',
    Restecg: '',
    Thalach: '',
    Exang: '',
    Oldpeak: '',
    Slope: '',
    Ca: '',
    Thal: '',
  });

  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.1:5000/api/heart_disease', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data.result || data.error);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-lg-10 text-center mb-4">
          <h1 className="display-4 fw-bold text-primary">Heart Disease Prediction</h1>
          <p className="lead text-secondary">
            Enter your details below to predict the likelihood of heart disease based on real-time data and health indicators.
          </p>
        </div>
      </div>

      <div className="row w-100 justify-content-center">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit} className="form-scroll">
                {Object.keys(formData).map((key) => (
                  <div key={key} className="mb-3">
                    <label htmlFor={key} className="form-label text-secondary">
                      {key}
                    </label>
                    <input
                      type="text"
                      id={key}
                      name={key}
                      className="form-control"
                      value={formData[key]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary rounded-pill py-2">
                    Predict
                  </button>
                </div>
              </form>
              {result && <p className="mt-3 text-primary fs-5 fw-bold">{result}</p>}
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 text-center">
              <h5 className="card-title text-primary mb-3">Applications of Heart Disease Model</h5>
              <p className="card-text text-secondary">
                Heart disease is one of the leading causes of death worldwide. By providing personalized risk assessments, we
                help individuals take proactive steps to prevent and manage heart-related health conditions.
              </p>
              <ul className="list-unstyled">
                <li><strong className="text-primary">Prevention:</strong> Identifying risks early for lifestyle modifications.</li>
                <li><strong className="text-primary">Management:</strong> Monitoring health to reduce adverse events.</li>
                <li><strong className="text-primary">Medical Decision Support:</strong> Helping doctors make data-driven decisions.</li>
              </ul>
              <Link to="/dashboard" className="btn btn-secondary rounded-pill mt-3">
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartPage;
