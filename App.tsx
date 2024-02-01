import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import AboutPage from './AboutPage';
import CO2EstimatePage from './CO2EstimatePage';
import EPAInfo from './EPAInfo';
import CalculateCO2 from './CalculateCO2';
import CO2Sources from './CO2Sources';
import CO2Impact from './CO2Impact';
import CO2Strategies from './CO2Strategies';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/co2-estimate" element={<CO2EstimatePage />} />
        <Route path="/co2-estimate/sources" element={<CO2Sources />} />
        <Route path="/co2-estimate/impact" element={<CO2Impact />} />
        <Route path="/co2-estimate/strategies" element={<CO2Strategies />} />
        <Route path="/epainfo" element={<EPAInfo />} />
        <Route path="/calcco2" element={<CalculateCO2 />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
