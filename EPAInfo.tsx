import React from 'react';
import './EPAInfo.css';

const EPAInfo: React.FC = () => {
  return (
    <div className="epaInfoContainer">
      <h1>EPA's Green and Clean Energy Initiatives</h1>
      <p>Explore the Environmental Protection Agency (EPA)'s efforts in promoting green and clean energy solutions. This guide covers various programs, costs, tax incentives, and practices for homeowners.</p>
      
      <section>
        <h2>EPA Renewable Energy Programs</h2>
        <p>The EPA advocates for renewable energy adoption through various programs. Key initiatives include:</p>
        <ul>
          <li><strong>Energy Star Program:</strong> Promotes energy-efficient products and practices in homes and businesses.</li>
          <li><strong>Green Power Partnership:</strong> Encourages organizations to use green power as a way to reduce environmental impact.</li>
          <li><strong>Clean Energy Programs:</strong> Supports various state and local clean energy policies and initiatives.</li>
        </ul>
      </section>

      <section>
        <h2>Understanding Costs and Investments</h2>
        <p>Investing in green energy involves understanding the costs and long-term savings:</p>
        <ul>
          <li><strong>Installation Costs:</strong> Initial costs vary based on the type of renewable energy system installed.</li>
          <li><strong>Long-Term Savings:</strong> Although there's an upfront cost, renewable energy systems often lead to significant long-term savings in energy bills.</li>
          <li><strong>Operational Costs:</strong> Maintenance and operational costs are typically lower compared to traditional energy sources.</li>
        </ul>
      </section>

      <section>
        <h2>Tax Rebates and Financial Incentives</h2>
        <p>The EPA and other government bodies provide financial incentives to encourage renewable energy adoption:</p>
        <ul>
          <li><strong>Federal Tax Credits:</strong> Homeowners can avail of tax credits for installing renewable energy systems like solar panels and wind turbines.</li>
          <li><strong>State and Local Incentives:</strong> Additional incentives may be available at the state and local levels.</li>
          <li><strong>Rebate Programs:</strong> Rebates can offset the initial cost of energy-efficient appliances and systems.</li>
        </ul>
      </section>

      <section>
        <h2>Best Practices for Homeowners</h2>
        <p>Adopting green energy practices in daily life can significantly reduce environmental impact:</p>
        <ul>
          <li><strong>Energy Efficiency Upgrades:</strong> Implementing upgrades like insulation, efficient windows, and LED lighting.</li>
          <li><strong>Smart Home Devices:</strong> Using smart thermostats and appliances to optimize energy use.</li>
          <li><strong>Renewable Energy Systems:</strong> Installing solar panels, wind turbines, or geothermal systems to generate clean energy.</li>
        </ul>
      </section>

      {/* Additional sections and detailed information can be added here */}

    </div>
  );
};

export default EPAInfo;
