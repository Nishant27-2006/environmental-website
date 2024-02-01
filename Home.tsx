import BoatVideo from "./BoatVideo";
import HeroText from "./HeroText";
import MapImages from "./MapImages";
import ClimateChangeImage from "./cc.png";
import './Home.css';

function Home() {
  // Define the inline style for the container
  const containerStyle = {
    display: 'flex',       // Use flex display to align items in a row
    alignItems: 'center',  // Align items vertically
    justifyContent: 'space-around'  // Add space around items
  };

  // Define the inline style for the text section
  const textStyle = {
    width: '45%',  // Adjust the width as needed
    margin: '0 2%' // Add some margin for spacing
  };

  // Inline style for the image remains the same
  const imageStyle = {
    width: '50%',   // Adjust the width as needed
    height: 'auto'  // This ensures the image keeps its aspect ratio
  };

  return (
    <>
      <HeroText />
      <div className="boat-video-container">
        <BoatVideo />
      </div>
      <div style={containerStyle}>  {/* Apply the container style here */}
        <img src={ClimateChangeImage} alt="Climate Change Visualization" style={imageStyle} />
        <div style={textStyle}> {/* Apply the text style here */}
          <h2>Understanding Climate Change</h2>
          <p>
            Climate change refers to significant, long-term changes in the global climate. It's a complex issue 
            that affects our planet's weather patterns, ecosystems, and species. Driven predominantly by human 
            activities, particularly fossil fuel burning and deforestation, it leads to rising global temperatures, 
            sea levels, and extreme weather events. Understanding and addressing climate change is crucial for 
            a sustainable future, as it poses significant challenges to environmental, social, and economic stability 
            worldwide. Our actions today will determine the health of our planet for future generations.
          </p>
          {/* Additional paragraphs or content */}
        </div>
      </div>
      <div>
        {/* Other components or content */}
      </div>
    </>
  );
}

export default Home;
