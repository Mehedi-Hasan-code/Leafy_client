import React from 'react';

const SendMessage = () => {
  return (
    <div className="bg-gray-200 px-4 sm:px-6">
      <h1 className='text-2xl font-semibold'>Send us a Message</h1>
      <form className="flex flex-col h-full space-y-4 py-4">
        <input
          className="border rounded-xl px-4 py-1 w-full"
          type="text"
          placeholder="Full Name *"
        />

        <input
          className="border rounded-xl px-4 py-1 w-full"
          type="text"
          placeholder="Email *"
        />

        <input
          className="border rounded-xl px-4 py-1 w-full"
          type="text"
          placeholder="Phone *"
        />

        <input
          className="border rounded-xl px-4 py-1 w-full"
          type="text"
          placeholder="Subject *"
        />

        <input
          className="border rounded-xl px-4 py-1 w-full md:grow"
          type="text"
          placeholder="Message *"
        />

        <div className="w-full btn mb-10">
          <button>Send Now</button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
