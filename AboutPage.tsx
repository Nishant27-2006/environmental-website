// AboutPage.tsx
import React from 'react';
import Navbar from "./Navbar";
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const sections = [
    {
      title: "About Renewable Residence",
      content: "Welcome to our website dedicated to promoting green and clean energy solutions for homeowners. Our mission is to provide comprehensive information about renewable energy programs, incentives, and practices that can make homes more environmentally friendly."
    },
    {
      title: "Our Mission",
      content: "Our goal is to help reduce the negative impact of fossil fuels on the environment by making it easier for homeowners to access and understand the benefits of green energy. We compile the latest information on renewable energy options, costs, tax rebates, and best practices in a user-friendly format."
    },
    {
      title: "Our Vision",
      content: "We envision a future where every home is powered by clean, renewable energy. Through this website, we aim to educate and empower homeowners to make sustainable choices that benefit both the environment and their own wellbeing."
    },
    {
      title: "Our History",
      content: "Founded in 2024, Renewable Residence began as a small initiative to bring awareness to the importance of renewable energy in residential areas. Over the years, our platform has grown into a leading resource for homeowners seeking to make a positive environmental impact."
    },
    {
      title: "Our Values",
      content: "At Renewable Residence, we uphold the values of sustainability, integrity, and community. We believe in the power of collective effort and are committed to providing trustworthy information and support to those seeking to join the renewable energy movement."
    },
    {
      title: "Meet Our Team",
      content: "Our team is composed of dedicated professionals from various fields including environmental science, renewable energy engineering, and sustainable development. Each member brings unique expertise and a shared passion for creating a more sustainable future."
    },
    {
      title: "Achievements",
      content: "Renewable Residence has been acknowledged for its significant contributions to environmental advocacy. Our efforts have been recognized with several awards and we have formed valuable partnerships with key players in the renewable energy sector."
    },
    {
      title: "Join Us",
      content: "We invite you to join our community of environmentally-conscious individuals and organizations. Whether you are a homeowner, a professional, or a company, your participation is crucial in driving the change towards a sustainable future."
    }
    // Add more sections as needed
  ];

  return (
    <div className="aboutPageContainer">
      {sections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </div>
  );
};

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <>
    <h2>{title}</h2>
    <p>{content}</p>
  </>
);

export default AboutPage;
