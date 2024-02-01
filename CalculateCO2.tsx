import React, { useState } from 'react';
import './CalculateCO2.css';

const CalculateCO2: React.FC = () => {
  const [inputs, setInputs] = useState({
    electricityUse: 0,
    gasUse: 0,
    wasteGenerated: 0,
    milesDriven: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: parseFloat(event.target.value) || 0,
    });
  };

  const calculateTotalEmissions = () => {
    const CO2PerKWh = 0.92; // CO2 emitted per kWh of electricity
    const CO2PerTherm = 5.3; // CO2 emitted per therm of gas
    const CO2PerPoundWaste = 0.1; // CO2 emitted per pound of waste
    const CO2PerMile = 0.4; // CO2 emitted per mile driven

    return (
      inputs.electricityUse * CO2PerKWh +
      inputs.gasUse * CO2PerTherm +
      inputs.wasteGenerated * CO2PerPoundWaste +
      inputs.milesDriven * CO2PerMile
      // Add other activities calculation here
    );
  };

  return (
    <div className="calculateCO2Container">
      <h1>Calculate Your Annual CO2 Emissions</h1>
      <p>Use this tool to estimate the amount of CO2 emissions generated from your daily activities on a yearly basis.</p>

      <div className="inputSection">
        <label htmlFor="electricityUse">Electricity Use (kWh/year):</label>
        <input
          type="number"
          id="electricityUse"
          name="electricityUse"
          value={inputs.electricityUse}
          onChange={handleInputChange}
        />

        <label htmlFor="gasUse">Gas Use (therms/year):</label>
        <input
          type="number"
          id="gasUse"
          name="gasUse"
          value={inputs.gasUse}
          onChange={handleInputChange}
        />

        <label htmlFor="wasteGenerated">Waste Generated (pounds/year):</label>
        <input
          type="number"
          id="wasteGenerated"
          name="wasteGenerated"
          value={inputs.wasteGenerated}
          onChange={handleInputChange}
        />

        <label htmlFor="milesDriven">Miles Driven (miles/year):</label>
        <input
          type="number"
          id="milesDriven"
          name="milesDriven"
          value={inputs.milesDriven}
          onChange={handleInputChange}
        />
      </div>

      <div className="resultsSection">
        <h2>Your Estimated Annual CO2 Emissions:</h2>
        <p>{calculateTotalEmissions().toFixed(2)} kg CO2/year</p>
      </div>
    </div>
  );
};

export default CalculateCO2;
