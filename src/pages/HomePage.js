import React from 'react';
import Hero from '../components/HeroSection';
import Reviews from '../components/Reviews';
import Series from '../components/Series';
import EquipmentSection from '../components/EquipmentSection';

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <Reviews />
      <Series />
      <EquipmentSection />
    </div>
  );
};

export default HomePage;
