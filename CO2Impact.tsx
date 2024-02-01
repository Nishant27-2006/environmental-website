import React from 'react';
import './CO2Impact.css'; // CSS file for styling

const CO2Impact: React.FC = () => {
  return (
    <div className="co2ImpactContainer">
      <h1>Impact of CO2 Emissions</h1>
      <p>Increased levels of CO2 in the atmosphere are a major contributor to global warming and climate change, with wide-ranging and profound impacts on the environment and human health.</p>
      
      <section className="impactSection">
        <h2>Climate Change</h2>
        <p>Elevated CO2 levels enhance the greenhouse effect, leading to higher global temperatures. This results in altered weather patterns, such as increased frequency and intensity of heatwaves, hurricanes, droughts, and heavy rainfall events. For example, the intensity of hurricanes has increased noticeably since the early 1980s, a trend closely linked to rising sea surface temperatures from global warming.</p>

        <h2>Rising Sea Levels</h2>
        <p>Global warming leads to the melting of polar ice caps and glaciers, contributing to rising sea levels. This rise threatens coastal and low-lying communities with increased flooding, erosion, and storm surges. Cities like Miami, Bangkok, and Jakarta are facing serious flooding challenges, and small island nations risk being submerged in the coming decades.</p>

        <h2>Loss of Biodiversity</h2>
        <p>Climate change significantly affects wildlife and their habitats. It leads to shifts in species distribution, with some species moving towards the poles or to higher elevations seeking cooler temperatures. This shift can result in reduced biodiversity in certain ecosystems and may lead to extinction for species unable to adapt or migrate. The Great Barrier Reef, for example, has seen devastating coral bleaching events linked to rising ocean temperatures.</p>

        <h2>Human Health Risks</h2>
        <p>Climate change and air pollution from CO2 emissions pose various health risks. Direct impacts include heat-related illnesses and deaths during heatwaves. Indirect effects include worsened air quality leading to respiratory issues, and changes in the spread of infectious diseases. Regions with poor air quality, like some urban areas in India and China, see a high incidence of respiratory diseases.</p>

        {/* Additional detailed sections can be added here */}
      </section>
    </div>
  );
};

export default CO2Impact;
