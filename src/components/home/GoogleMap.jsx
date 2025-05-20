import React from 'react';
import {
  APIProvider,
  Map,
  Marker,
  useMap,
} from '@vis.gl/react-google-maps';

const location = { lat: 40.7580, lng: -73.9855 }; // Example: Times Square

// Zoom control buttons using Tailwind
const ZoomControls = () => {
  const map = useMap();

  const handleZoomIn = () => {
    if (map) {
      const newZoom = Math.min((map.getZoom() || 15) + 1, 21);
      map.setZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (map) {
      const newZoom = Math.max((map.getZoom() || 15) - 1, 1);
      map.setZoom(newZoom);
    }
  };

  return (
    <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
      <button
        onClick={handleZoomIn}
        className="px-4 py-2 bg-white text-black font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        Zoom In
      </button>
      <button
        onClick={handleZoomOut}
        className="px-4 py-2 bg-white text-black font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        Zoom Out
      </button>
    </div>
  );
};

const GoogleMap = () => {
  return (
    <div className="relative w-screen h-screen">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          style={{ width: '50%', height: '50vh' }}
          defaultCenter={location}
          defaultZoom={15}
          gestureHandling="greedy"
          disableDefaultUI={true}
        >
          <Marker position={location} />
          <ZoomControls />
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMap;
