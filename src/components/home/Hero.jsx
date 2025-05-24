import React, { useEffect, useState, useRef, useCallback } from 'react';
import Loader from '../common/Loader';
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const autoSlideRef = useRef(null);

  const resetProgress = () => {
    setProgress(0);
  };

  // Navigation handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoSlide();
    resetProgress();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
    resetAutoSlide();
    resetProgress();
  };

  const handleGoTo = (index) => {
    setCurrentIndex(index);
    resetAutoSlide();
    resetProgress();
  };

  // Auto slide logic
  const resetAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
      resetAutoSlide();
      setProgress(0);
    }, 5000);
  }, [carouselData.length]);

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

  useEffect(() => {
    if (carouselData.length === 0) return;
    resetAutoSlide();
    return () => clearInterval(autoSlideRef.current);
  }, [carouselData.length, resetAutoSlide]);

  // Progress bar effect
  useEffect(() => {
    if (carouselData.length === 0) return;

    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        }
        return prevProgress + increment;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, [carouselData.length, currentIndex]);

  if (isLoading || carouselData.length === 0) {
    return (
      <div className="min-h-[80vh] bg-gray-200 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative min-h-[80vh] text-white overflow-hidden w-11/12 mx-auto rounded-2xl">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-[6px] rounded-full overflow-hidden z-10">
        <div
          className="h-full bg-green-400 transition-all duration-50"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* main slider */}
      <div className="relative w-full min-h-[80vh]">
        {/* background image with overlay */}
        <div className="absolute inset-0 bg-black rounded-2xl">
          <img
            src={carouselData[currentIndex]?.backgroundImage}
            alt="Carousel background"
            className="w-full h-full object-cover rounded-2xl opacity-60"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative flex flex-col justify-start h-full p-8">
          <h1 className="text-4xl md:text-6xl font-bold">
          {[carouselData[currentIndex].message]}

          </h1>
          <p className="max-w-lg text-gray-300 text-sm md:text-base mt-4">
            {carouselData[currentIndex].paragraph}
          </p>
          <div className="mt-6">
            <button className="btn">
              {carouselData[currentIndex].buttonText}
            </button>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-2 mt-6">
            <button onClick={handlePrev} className="btn">
              Prev
            </button>
            <button onClick={handleNext} className="btn">
              Next
            </button>
          </div>
        </div>
        {/* Thumbnails */}
        <div className="absolute bottom-8  flex items-center gap-2 sm:gap-4 w-full justify-center">
          {carouselData.map((thumbnail, index) => (
            <div
              key={thumbnail.id}
              onClick={() => handleGoTo(index)}
              className={`relative cursor-pointer transition-all duration-300 w-24 h-16 ${
                currentIndex === index ? 'ring-2 ring-white rounded-lg scale-110' : ''
              }`}
            >
              <img
                src={thumbnail.backgroundImage}
                alt="image"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;