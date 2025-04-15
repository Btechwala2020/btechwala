import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card_year from './components/Home_screen/Choose_year/Card_year';
import First_pyq from './components/pyq/first_year_pyq_link/First_pyq';
import Second_pyq from './components/pyq/second_year_pyq_link/Second_pyq';
import Third_pyq from './components/pyq/third_year_pyq_link/Third_pyq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card_year />} />
        <Route path="/pyq/First-year" element={<First_pyq />} />
        <Route path="/pyq/Second-year" element={<Second_pyq />} />
        <Route path="/pyq/Third-year" element={<Third_pyq />} />
      </Routes>
    </Router>
  );
}

export default App;