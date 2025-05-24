import React from 'react';

const SendMessage = () => {
  return (
    <div className="bg-emerald-50 px-2 sm:px-6 py-8">
      <h1 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">
        Send us a Message
      </h1>
      <form className="flex flex-col h-full space-y-4">
        <input
          className="border border-emerald-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          type="text"
          placeholder="Full Name *"
        />

        <input
          className="border border-emerald-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          type="text"
          placeholder="Email *"
        />

        <input
          className="border border-emerald-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          type="text"
          placeholder="Phone *"
        />

        <input
          className="border border-emerald-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          type="text"
          placeholder="Subject *"
        />

        <textarea
          className="border border-emerald-200 rounded-xl px-4 py-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          placeholder="Message *"
        />

        <button className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-xl hover:bg-emerald-700 transition-colors duration-300">
          Send Now
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
