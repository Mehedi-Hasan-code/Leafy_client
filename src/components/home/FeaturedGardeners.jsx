import React from 'react';
import ActiveGardenersCard from './ActiveGardenersCard';

const FeaturedGardeners = ({ activeGardeners }) => {
  // Ensure activeGardeners is an array
  const gardeners = Array.isArray(activeGardeners) ? activeGardeners : [];

  return (
    <div className="relative w-11/12 mx-auto">
      <h1 className="text-4xl sm:text-6xl text-center">Active Gardeners</h1>
      {/* flex container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {gardeners.map((gardener) => (
          <ActiveGardenersCard key={gardener._id} gardener={gardener} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedGardeners;
