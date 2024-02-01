import Logo from "./Logo";
import ArrowRight from "./ArrowRight";
import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animation";
import AboutPage from './AboutPage'; // Import the About component
import CO2EstimatePage from './CO2EstimatePage'; // Import the CO2 Estimate component
import './index.css'; // Importing your CSS file
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import the image
import RenewableResidence from './renewableresidence.png'; // Adjust the path as necessary

function Navbar() {
  
  const [currentPage, setCurrentPage] = useState('home');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const navbarStyle = {
    backgroundColor: '#ccffcc', // Light green color
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'around',
    height: '80px',
    position: 'fixed',
    top: 0,
    zIndex: 100
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100"
      >
        {/* Logo and other elements if present */}

        {/* Add the image here */}
        <img src={RenewableResidence} alt="Renewable Residence" className="absolute left-0 top-0" />

        <div className="flex gap-20px items-center <md:hidden">
          <motion.span 
            variants={reveal} 
            className="cursor-pointer"
            onClick={() => navigate('/')}
          >
            <strong>Home</strong>
          </motion.span>
          
          <motion.span 
              variants={reveal} 
              className="cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <strong>CO2 Estimate</strong>
            </motion.span>
            {showDropdown && (
              <div className="dropdownContainer">
                <div className="dropdownMenu">
                  <motion.span 
                    variants={reveal} 
                    className="cursor-pointer block px-4 py-2"
                    onClick={() => navigate('/co2-estimate/sources')}
                  >
                    Sources of CO2 in Residential Buildings
                  </motion.span>
                  <motion.span 
                    variants={reveal} 
                    className="cursor-pointer block px-4 py-2"
                    onClick={() => navigate('/co2-estimate/impact')}
                  >
                    Impact of CO2 Emissions
                  </motion.span>
                  <motion.span 
                    variants={reveal} 
                    className="cursor-pointer block px-4 py-2"
                    onClick={() => navigate('/co2-estimate/strategies')}
                  >
                    Strategies for Reducing Home CO2 Emissions
                  </motion.span>
                  {/* Add more dropdown items here */}
                </div>
              </div>
            )}
            
          <motion.span 
            variants={reveal} 
            className="cursor-pointer"
            onClick={() => navigate('/epainfo')}
          >
            <strong>EPA Info</strong>
          </motion.span>
          <motion.span 
            variants={reveal} 
            className="cursor-pointer"
            onClick={() => navigate('/calcco2')}
          >
            <strong>Calculate CO2 Footprint</strong>
          </motion.span>
          <motion.span 
            variants={reveal} 
            className="cursor-pointer"
            onClick={() => navigate('/about')}
          >
            <strong>About</strong>
          </motion.span>
          
          {/* Add other navigation items here, similar to the above pattern */}
        </div>

        {/* Other elements of your Navbar, like the sign-in button */}
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
