import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';

const PhoneEmailCard = () => {
  return (
    <div className="bg-emerald-50 flex flex-col justify-center items-center divide-y divide-emerald-100">
      <div className="flex flex-col items-center w-full py-8 px-6 hover:bg-emerald-100/50 transition-colors duration-300">
        <FiPhoneCall className="text-2xl text-emerald-600 mb-3" />
        <p className="text-center text-emerald-800 font-medium">
          00500 222 333
        </p>
      </div>
      <div className="flex flex-col items-center w-full py-8 px-6 hover:bg-emerald-100/50 transition-colors duration-300">
        <MdOutlineEmail className="text-2xl text-emerald-600 mb-3" />
        <p className="text-center text-emerald-800 font-medium">
          admin@leafy.gmail.com
        </p>
        <p className="text-center text-emerald-700">www.leafy.org</p>
      </div>
      <div className="flex flex-col items-center w-full py-8 px-6 hover:bg-emerald-100/50 transition-colors duration-300">
        <IoLocationOutline className="text-2xl text-emerald-600 mb-3" />
        <p className="text-center text-emerald-800 font-medium">
          101, Greenedge Line, Australia
        </p>
        <p className="text-center text-emerald-700">
          101, Broklyn Street Line, New York
        </p>
      </div>
    </div>
  );
};

export default PhoneEmailCard;
