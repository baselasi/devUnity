import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashBoard/dashBoard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
