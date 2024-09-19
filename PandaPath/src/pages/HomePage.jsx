// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import AboutUs from '../components/ui/AboutUs';
import ItenaryList from '../components/ui/ItineraryList';
import ReviewList from '../components/ui/ReviewList';
import Embark from '../components/ui/Embark';



const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ItenaryList/>
      <ReviewList/>
      <Embark/>
    </div>
  );
};

export default HomePage;
