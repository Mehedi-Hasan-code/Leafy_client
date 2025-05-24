import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-emerald-50/50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-emerald-200 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-emerald-600 rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loading;
