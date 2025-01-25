/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Kidney.css';

function KidneyPage() {
  const [formData, setFormData] = useState({
    Age: '',
    BloodPressure: '',
    SpecificGravity: '',
    Albumin: '',
    Sugar: '',
    RedBloodCells: '',
    PusCell: '',
    PusCellClumps: '',
    Bacteria: '',
    BloodGlucoseRandom: '',
    BloodUrea: '',
    SerumCreatinine: '',
    Sodium: '',
    Potassium: '',
    Hemoglobin: '',
    PackedCellVolume: '',
    WhiteBloodCellCount: '',
    RedBloodCellCount: '',
    Hypertension: '',
    DiabetesMellitus: '',
    CoronaryArteryDisease: '',
    Appetite: '',
    PedaEdema: '',
    Aanemia: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/kidney_disease', {
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

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-lg-10 text-center mb-4">
          <h1 className="display-4 fw-bold text-primary">Kidney Disease Prediction</h1>
          <p className="lead text-secondary">
            Enter your health details below to predict the likelihood of kidney disease based on advanced medical data.
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
                      {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                    </label>
                    <input
                      type="text"
                      id={key}
                      name={key}
                      className="form-control"
                      value={formData[key]}
                      onChange={handleChange}
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
              <h5 className="card-title text-primary mb-3">Applications of Kidney Disease Model</h5>
              <p className="card-text text-secondary">
                Kidney disease is a serious health condition that can lead to kidney failure. By analyzing various health indicators, we can help detect the disease early, enabling proactive treatment.
              </p>
              <ul className="list-unstyled">
                <li><strong className="text-primary">Early Detection:</strong> Identifying at-risk individuals before symptoms appear.</li>
                <li><strong className="text-primary">Management:</strong> Assisting healthcare providers in managing chronic kidney disease.</li>
                <li><strong className="text-primary">Monitoring:</strong> Continuous tracking of kidney function in high-risk patients.</li>
                <li><strong className="text-primary">Cost Efficiency:</strong> Reducing hospitalizations and treatments through early intervention.</li>
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
}

export default KidneyPage;
