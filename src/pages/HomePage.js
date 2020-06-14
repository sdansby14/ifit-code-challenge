import React from 'react';
import Hero from '../components/HeroSection';
import Reviews from '../components/Reviews';
import Series from '../components/Series';

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <Reviews />
      <Series />
    </div>
  );
};

export default HomePage;
