import React, { useEffect, useState } from 'react';
import TipCard from './TipCard';
import { Typewriter } from 'react-simple-typewriter';

const Tips = () => {
  const [homeTips, setHomeTips] = useState([]);
  console.log(homeTips);
  useEffect(() => {
    fetch('https://leafy-server.vercel.app/home-tips')
      .then((res) => res.json())
      .then((data) => {
        const sortedTips = [...data].sort((a, b) => b.likes - a.likes);
        setHomeTips(sortedTips);
      });
  }, []);
  return (
    <div className="w-full bg-white rounded-3xl p-8 shadow-lg">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-emerald-800">
        The Ultimate
        <Typewriter
          words={[' Tips', ' Trends', ' & Inspiration']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {homeTips.map((tip) => (
          <TipCard tip={tip} key={tip._id} />
        ))}
      </div>
    </div>
  );
};

export default Tips;
