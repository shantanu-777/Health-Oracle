import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
    navigate('/dashboard');
  };

  return (
    <div className="diabetes-bg min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <div className="mb-3">
              <span className="doctor-icon">
                <svg width="60" height="60" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#e3f2fd" />
                  <path d="M12 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" fill="#1976d2"/>
                </svg>
              </span>
            </div>
            <h1 className="display-5 fw-bold text-primary mb-2">Diabetes Prediction</h1>
            <p className="lead text-secondary mb-0">
              Enter your health details below to predict the likelihood of diabetes.<br />
              <span className="fst-italic">Powered by advanced medical AI.</span>
            </p>
          </div>
        </div>

        <div className="row justify-content-center align-items-start">
          {/* Form Card */}
          <div className="col-md-6 mb-4">
            <div className="card glass-card border-0 shadow-lg">
              <div className="card-body p-4">
                <h4 className="mb-3 text-primary">
                  <i className="bi bi-clipboard2-pulse me-2"></i>Patient Details
                </h4>
                <form onSubmit={handleSubmit} className="form-scroll">
                  {Object.keys(formData).map((key) => (
                    <div key={key} className="mb-3">
                      <label htmlFor={key} className="form-label text-secondary fw-semibold">
                        {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                      </label>
                      <input
                        type="text"
                        id={key}
                        name={key}
                        className="form-control form-control-lg"
                        value={formData[key]}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        style={{ background: 'rgba(255,255,255,0.85)' }}
                      />
                    </div>
                  ))}
                  <div className="d-grid gap-2 mt-4">
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill shadow">
                      <i className="bi bi-activity me-2"></i>Predict
                    </button>
                  </div>
                </form>
                {result && (
                  <div className={`alert mt-4 text-center fw-bold ${result.includes('Not') ? 'alert-success' : 'alert-danger'}`}>
                    <i className="bi bi-heart-pulse-fill me-2"></i>{result}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Applications Card */}
          <div className="col-md-5 mb-4">
            <div className="card glass-card border-0 shadow-lg h-100">
              <div className="card-body p-4 d-flex flex-column">
                <h4 className="text-primary mb-3">
                  <i className="bi bi-info-circle-fill me-2"></i>Why Use This Model?
                </h4>
                <ul className="text-secondary fs-6 flex-grow-1">
                  <li>Early detection of diabetes in high-risk individuals.</li>
                  <li>Assists healthcare providers with timely interventions.</li>
                  <li>Monitors changes in risk levels over time.</li>
                  <li>Promotes preventive measures and healthier lifestyles.</li>
                </ul>
                <div className="text-center mt-3">
                  <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="Medical" width="60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Button */}
        <div className="d-flex justify-content-center mt-4">
          <button
            onClick={navigateToDashboard}
            className="btn btn-outline-primary btn-lg rounded-pill px-5 shadow"
          >
            <i className="bi bi-speedometer2 me-2"></i>Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Diabetes;
// ...existing code...