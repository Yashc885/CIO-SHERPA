import React from 'react';
import Marquee from 'react-fast-marquee';

const Slider = () => {
  const contentItems = [
    'Welcome to the Marquee Slider!',
    'This is a dynamic example using React and Tailwind CSS.',
    'You can customize content and styles as needed.',
    'Feel free to add more items or fetch data dynamically.',
    'Ensure your environment includes jQuery and the marquee plugin for proper functionality.'
  ];

  return (
    <div className="border-1px solid black">
    <div className="marquee  text-black relative overflow-hidden w-full">
      <div className="absolute top-0 bg-blue-200 text-white text-semibold  z-10 px-2 flex items-center">
        Headlines
      </div>
      <Marquee speed={60}>
        {contentItems.map((item, index) => (
          <div key={index} className="inline  bg-white text-white pl-4">
            {item}
          </div>
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default Slider;
