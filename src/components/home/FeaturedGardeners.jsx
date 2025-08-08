import React from 'react';
import ActiveGardenersCard from './ActiveGardenersCard';
const FeaturedGardeners = ({ activeGardeners }) => {
  // Ensure activeGardeners is an array
  const gardeners = Array.isArray(activeGardeners) ? activeGardeners : [];

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50 rounded-2xl shadow-lg">
      <div>
        <h1 className="text-4xl sm:text-6xl text-center font-bold text-green-800 mb-12">
          Active Gardeners
        </h1>
        {/* grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {gardeners.map((gardener) => (
            <ActiveGardenersCard key={gardener._id} gardener={gardener} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedGardeners;
