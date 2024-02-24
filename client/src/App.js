// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Reservations from './components/reservation/Reservations';
// import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations/:reservationId" element={<Reservations />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
