import React from 'react';
import { LuCalendarRange } from 'react-icons/lu';
import { GoArrowUpRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const TipCard = ({ tip }) => {
  const navigate = useNavigate()
  const { image, date, authorImage, userName, likes, title, _id } = tip;
  return (
    <div className="bg-white border border-emerald-100 p-6 rounded-2xl grid sm:grid-cols-[1fr_1.5fr] gap-6 items-center hover:shadow-lg transition-shadow duration-300">
      <div className="relative group">
        <img
          className="rounded-2xl w-full h-full object-cover aspect-square"
          src={image}
          alt="Image"
        />
        <div className="flex items-center gap-2 absolute bottom-4 left-[50%] -translate-x-[50%] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
          <LuCalendarRange className="text-emerald-600" />
          <p className="whitespace-nowrap text-emerald-700 font-medium">
            {date}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full border-2 border-emerald-200"
              src={authorImage}
              alt="author image"
            />
            <p className="text-lg font-semibold text-emerald-800">{userName}</p>
          </div>
          <p className="text-emerald-600 font-medium">❤️ {likes} likes</p>
        </div>
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <div className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
          <button onClick={() => navigate(`/tip-details/${_id}`)} className="font-medium cursor-pointer hover:scale-[1.1] duration-75">Learn More</button>
          <GoArrowUpRight className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default TipCard;
