import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
const ActiveGardenersCard = ({ gardener }) => {
  console.log(gardener);
  const { name, image, expert_in } = gardener;
  return (
    <div className="h-full flex flex-col border rounded-2xl overflow-hidden p-4 sm:p-6">
      <div className="grow">
        <img className="w-full h-full rounded-xl" src={image} alt="image" />
      </div>
      <div className="space-y-2 mt-4">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="font-semibold">{expert_in}</p>
        <div className="flex justify-start gap-3 my-4">
          <div className="bg-gray-200 p-2 rounded-full">
            <a href="https://www.x.com" target="_blank">
              <FaXTwitter size={18} />
            </a>
          </div>
          <div className="bg-gray-200 p-2 rounded-full">
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebookF size={18} />
            </a>
          </div>
          <div className="bg-gray-200 p-2 rounded-full">
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram size={18} />
            </a>
          </div>
          <div className="bg-gray-200 p-2 rounded-full">
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveGardenersCard;
