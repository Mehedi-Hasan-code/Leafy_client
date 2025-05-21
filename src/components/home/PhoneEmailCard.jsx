import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';

const PhoneEmailCard = () => {
  return (
    <div className="bg-red-200 flex flex-col justify-center items-center">
      <div className='bg-amber-300 flex flex-col items-center w-full py-6'>
        <FiPhoneCall />
        <p className='text-center'>00500 222 333</p>
      </div>
      <div className='bg-amber-300 flex flex-col items-center w-full py-6'>
        <MdOutlineEmail />
        <p className='text-center'>admin@leafy.gmail.com</p>
        <p className='text-center'>www.leafy.org</p>
      </div>
      <div className='bg-amber-300 flex flex-col items-center w-full py-6'>
        <IoLocationOutline />
        <p className='text-center'>101, Greenedge Line, Australia</p>
        <p className='text-center'>101, Broklyn Street Line, New York</p>
      </div>
    </div>
  );
};

export default PhoneEmailCard;
