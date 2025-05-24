import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedGardeners from '../components/home/FeaturedGardeners';
import { useLoaderData } from 'react-router-dom';
import GetInTouch from '../components/home/GetInTouch';
import Tips from '../components/home/Tips';

const Home = () => {
  const activeGardeners = useLoaderData();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <Hero />
        <FeaturedGardeners activeGardeners={activeGardeners} />
        <GetInTouch />
        <Tips />
      </div>
    </div>
  );
};

export default Home;
