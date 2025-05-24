import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedGardeners from '../components/home/FeaturedGardeners';
import { useLoaderData } from 'react-router-dom';
import GetInTouch from '../components/home/GetInTouch';
import Tips from '../components/home/Tips';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Testimonial from '../components/home/Testimonial';

const Home = () => {
  useDocumentTitle('Leafy Home')
  const activeGardeners = useLoaderData();

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      <Hero />
      <FeaturedGardeners activeGardeners={activeGardeners} />
      <Tips />
      <Testimonial />
      <GetInTouch />
    </div>
  );
};

export default Home;
