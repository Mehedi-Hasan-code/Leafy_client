import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GardenersCard from '../components/gardeners/GardenersCard';

const ExploreGardeners = () => {
  const gardeners = useLoaderData();
  return (
    <div className="w-11/12 mx-auto grow">
      <div className="p-8 bg-gradient-to-r rounded-2xl from-cyan-400 to-emerald-400 flex flex-wrap justify-center gap-6">
        {gardeners.map((gardener) => (
          <GardenersCard key={gardener._id} gardener={gardener} />
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
