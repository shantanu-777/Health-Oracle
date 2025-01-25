/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HeartPage from './pages/HeartPage';
import Diabetes from './pages/Diabetes';
import Kidney from './pages/kidney';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/heartPage" element={<HeartPage />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/kidney" element={<Kidney />} />
      </Routes>
    </Router>
  );
};

export default App;
