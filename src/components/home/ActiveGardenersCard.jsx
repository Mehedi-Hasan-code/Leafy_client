import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const ActiveGardenersCard = ({ gardener }) => {
  const { name, image, expert_in } = gardener;
  return (
    <div className="h-full flex flex-col border-2 border-green-100 rounded-2xl overflow-hidden p-4 sm:p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:border-green-300 hover:-translate-y-1 hover:bg-green-50/30">
      <div className="grow">
        <img
          className="w-full h-full rounded-xl object-cover hover:scale-105 transition-transform duration-300"
          src={image}
          alt={name}
        />
      </div>
      <div className="space-y-3 mt-4">
        <h1 className="text-xl font-bold text-green-800 hover:text-green-600 transition-colors duration-300">
          {name}
        </h1>
        <p className="font-semibold text-green-700">Status: Active</p>
        <p className="font-semibold text-green-700">{expert_in}</p>
        <div className="flex justify-start gap-3 my-4">
          <div className="bg-green-50 p-2 rounded-full hover:bg-green-200 transition-colors duration-300">
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
          <div className="bg-green-50 p-2 rounded-full hover:bg-green-200 transition-colors duration-300">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
          <div className="bg-green-50 p-2 rounded-full hover:bg-green-200 transition-colors duration-300">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              <FaInstagram size={18} />
            </a>
          </div>
          <div className="bg-green-50 p-2 rounded-full hover:bg-green-200 transition-colors duration-300">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveGardenersCard;
