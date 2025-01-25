/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-5" style={{ minHeight: '100vh' }}>
      {/* Dashboard Header */}
      <h1 className="text-center mb-4" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1e3a8a' }}>
        Welcome to Health Oracle
      </h1>
      <p className="text-center mb-5" style={{ fontSize: '1.2rem', color: '#4b5563' }}>
        Your personal health assistant, providing real-time predictions and analysis of various health conditions.
      </p>

      {/* Cards Section */}
      <div className="row justify-content-center text-center">
        {/* Heart Disease Card */}
        <div className="col-md-4 mb-4">
          <div className="card text-center shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem', color: '#2563eb' }}>Heart Disease</h5>
              <p className="card-text" style={{ fontSize: '1rem', color: '#6b7280' }}>
                Predict and analyze heart-related conditions with high accuracy.
              </p>
              <Link to="/heartPage">
                <button className="btn btn-primary rounded-pill px-4 py-2 mt-3" style={{ fontSize: '1rem' }}>
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Diabetes Card */}
        <div className="col-md-4 mb-4">
          <div className="card text-center shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem', color: '#16a34a' }}>Diabetes</h5>
              <p className="card-text" style={{ fontSize: '1rem', color: '#6b7280' }}>
                Predict and analyze diabetes conditions with real-time data.
              </p>
              <Link to="/diabetes">
                <button className="btn btn-primary rounded-pill px-4 py-2 mt-3" style={{ fontSize: '1rem' }}>
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Kidney Conditions Card */}
        <div className="col-md-4 mb-4">
          <div className="card text-center shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem', color: '#f97316' }}>Kidney Conditions</h5>
              <p className="card-text" style={{ fontSize: '1rem', color: '#6b7280' }}>
                Predict and analyze kidney-related conditions for early detection.
              </p>
              <Link to="/kidney">
                <button className="btn btn-primary rounded-pill px-4 py-2 mt-3" style={{ fontSize: '1rem' }}>
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="text-center mt-5">
        <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>
          The Health Oracle uses advanced models to provide you with valuable insights and predictions to take proactive steps toward a healthier life.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
