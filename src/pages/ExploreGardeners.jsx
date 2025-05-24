import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GardenersCard from '../components/gardeners/GardenersCard';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ExploreGardeners = () => {
  useDocumentTitle('Explore Gardeners')
  const gardeners = useLoaderData();
  return (
    <div className="w-11/12 mx-auto grow my-10">
      <h1 className="text-3xl sm:text-6xl font-bold text-center m-4 sm:m-12 text-emerald-800">
        Meet Our Green Thumb Experts
      </h1>
      <div className="px-4 py-8 sm:p-8 rounded-2xl flex flex-wrap justify-center gap-6">
        {gardeners.map((gardener) => (
          <GardenersCard key={gardener._id} gardener={gardener} />
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
