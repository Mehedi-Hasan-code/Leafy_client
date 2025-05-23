import React from 'react';
import { LuCalendarRange } from 'react-icons/lu';
import { GoArrowUpRight } from 'react-icons/go';

const TipCard = ({ tip }) => {
  const { image, date, authorImage, userName, likes, title } = tip;
  return (
    <div className="border p-4 rounded-2xl grid sm:grid-cols-[1fr_1.5fr] gap-4 items-center">
      <div className="relative">
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={image}
          alt="Image"
        />
        <div className="flex items-center gap-2 absolute bottom-4 sm:bottom-6 left-[50%] -translate-x-[50%] bg-white px-3 py-1 rounded-xl">
          <LuCalendarRange />
          <p className="whitespace-nowrap">{date}</p>
        </div>
      </div>
      <div className="space-y-3 my-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <img
              className="w-[48px] h-[48px] rounded-full"
              src={authorImage}
              alt="author image"
            />
            <p className="text-[18px] font-semibold">{userName}</p>
          </div>

          <p>Likes: {likes}</p>
        </div>
        <h1 className="text-lg font-medium">{title}</h1>
        <div className="flex items-end gap-1 underline">
          <button>Learn More</button>
          <p>
            <GoArrowUpRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
