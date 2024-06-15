import React from 'react';

const Main = () => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white mx-auto">
      <div className="relative">
        <img
          src="https://globalcioforum.com/wp-content/uploads/2024/06/Kuwait-Event-BT.jpg"
          alt="Event"
          className="w-full h-auto object-cover transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:cursor-pointer"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-0 hover:bg-opacity-70 transition duration-300 ease-in-out"></div>
      </div>
      <div className="px-6 py-4">
        <div className="text-xs italic text-gray-400">Date: 12-06-2024</div>
        <div className="font-bold text-xl mb-2 text-black hover:underline">
          The World CIO-2010 Kuwait
        </div>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem.
          Aliquam molestie accumsan libero a pulvinar. Duis ornare aliquam grav
        </p>
        <div className="mt-4">
          <a
            href="/latest_news"
            className="block w-full max-w-xs mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out text-center"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
