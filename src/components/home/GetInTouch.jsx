import React from 'react';
import GoogleMap from '../../components/home/GoogleMap';
import PhoneEmailCard from './PhoneEmailCard';
import SendMessage from './SendMessage';
import { Typewriter } from 'react-simple-typewriter';

const GetInTouch = () => {
  return (
    <div className="w-full bg-white rounded-3xl p-8 shadow-lg">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-emerald-800">
        Get In Touch
        <Typewriter
          words={['With Us', 'From Anywhere']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 rounded-3xl overflow-hidden border border-emerald-100">
        <GoogleMap />
        <PhoneEmailCard />
        <SendMessage />
      </div>
    </div>
  );
};

export default GetInTouch;
