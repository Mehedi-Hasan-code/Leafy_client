import React, { useEffect, useState } from 'react';
import Loader from '../common/Loader';

const Hero = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('CarouselData.json')
      .then((res) => res.json())
      .then((data) => {
        setCarouselData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching carousel data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading || carouselData.length === 0) {
    return (
      <div className="min-h-[70vh] bg-gray-200 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative min-h-[70vh] text-white overflow-hidden w-11/12 mx-auto">
      {/* main slider */}
      <div className="relative w-full min-h-[70vh]">
        {/* background image with overlay */}
        <div className="absolute inset-0 bg-black rounded-2xl">
          <img
            src={carouselData[currentIndex]?.backgroundImage}
            alt="Carousel background"
            className="w-full h-full object-cover  rounded-2xl opacity-60"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative flex flex-col justify-start h-full">
          <h1 className="text-4xl md:text-6xl font-bold">
            {carouselData[currentIndex].message}
          </h1>
          <p className="max-w-lg text-gray-300 text-sm md:text-base">
            {carouselData[currentIndex].paragraph}
          </p>
          <div>
            <button className="btn">
              {carouselData[currentIndex].buttonText}
            </button>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-2">
            <button
              // onClick={prevSlide}
              className="btn"
            >
              Pre
            </button>
            <button
              // onClick={nextSlide}
              className="btn"
            >
              Next
            </button>
          </div>
        </div>
        {/* Thumbnails */}
        <div className="absolute bottom-8 right-12 flex items-center gap-4">
          {carouselData.map((thumbnail) => {
            
            return (
              <div 
                key={thumbnail.id}
                // onClick={() => goToSlide()}
                className={`relative cursor-pointer transition-all duration-300`}
              >
                <img 
                  src={thumbnail.backgroundImage} 
                  alt="image"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 rounded-b-lg">
                  <p className="text-xs text-center">{thumbnail.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
