import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Header />
      <LandingPage/>
      <Routes>
        
      
      </Routes>
    </Router>
  );
}

export default App;
