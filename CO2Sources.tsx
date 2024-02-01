import React from 'react';
import './CO2Sources.css'; // Ensure this file has the necessary styles

const CO2Sources: React.FC = () => {
  return (
    <div className="co2SourcesContainer">
      <h1>Understanding CO2 Emissions in Homes</h1>
      <p>Carbon dioxide (CO2) emissions from residential buildings significantly contribute to global greenhouse gas emissions, impacting climate change. This page delves into the sources, effects, and reduction strategies of CO2 emissions in homes, providing a comprehensive overview for homeowners and environmental enthusiasts alike.</p>
      
      <section className="sourceSection">
        <h2>Sources of CO2 in Residential Buildings</h2>
        <p>Residential CO2 emissions are multifaceted, encompassing various aspects of daily living. A detailed understanding of these sources is essential for identifying effective strategies to reduce the carbon footprint of homes.</p>
        
        <h3>Energy Production</h3>
        <p>The use of fossil fuels for electricity and heating is the primary source of CO2 emissions in homes. This encompasses the burning of coal, natural gas, and oil. In the United States, approximately 29% of 2019 greenhouse gas emissions were from electricity production, primarily from fossil fuel combustion. Renewable energy sources, such as solar and wind power, offer greener alternatives by significantly reducing emissions.</p>

        <h3>Appliances and Equipment</h3>
        <p>Home appliances and equipment, particularly those using gas, contribute to CO2 emissions. For instance, natural gas stoves release CO2 and other pollutants directly into the home environment. Moreover, inefficient electrical appliances consume excessive energy, leading to higher emissions. Switching to energy-efficient models, such as those certified by ENERGY STAR, can reduce emissions by 10-50%.</p>

        <h3>Waste Management</h3>
        <p>Waste decomposition in landfills generates methane, a potent greenhouse gas, which is later converted to CO2. In the U.S., landfills are the third-largest source of methane emissions. Efficient waste management practices like recycling, composting, and reducing waste generation can play a significant role in lowering CO2 emissions.</p>

        <h3>Transportation</h3>
        <p>Transportation related to residential living significantly contributes to CO2 emissions. This includes personal vehicle use for commuting and running household errands. Vehicles running on gasoline or diesel emit CO2, contributing to the household's carbon footprint. Transitioning to electric vehicles, using public transportation, carpooling, and adopting eco-friendly transportation methods are vital steps towards reduction.</p>

        <h3>Heating and Cooling</h3>
        <p>Heating and cooling systems in homes are substantial contributors to CO2 emissions. Older, inefficient heating and cooling systems consume more energy and emit more CO2. Implementing energy-efficient systems, regular maintenance, and using smart thermostats can optimize energy use and reduce emissions.</p>

        <h3>Building Materials and Construction</h3>
        <p>The construction of homes, including the materials used, also contributes to CO2 emissions. Manufacturing materials like concrete and steel is energy-intensive, releasing significant amounts of CO2. Utilizing sustainable building materials, energy-efficient design, and green construction practices can lessen the environmental impact.</p>

        {/* Further detailed sections can be added here */}
      </section>
    </div>
  );
};

export default CO2Sources;
