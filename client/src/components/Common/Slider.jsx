import React from 'react';
import Marquee from 'react-fast-marquee';

const Slider = () => {
  const contentItems = [
    { text: 'Skillza enhance your skills  ', link: 'https://example.com/page1' },
    { text: 'CXO TEHBOT the tech bot expert  ', link: 'https://example.com/page2' },
    { text: 'ABSOLUTELY the ai expert ', link: 'https://example.com/page3' },
    { text: 'CIO SHERPA under construction  ', link: 'https://example.com/page4' },
  ];

  return (
    <div className="overflow-hidden pr-2">
      <div className="marquee text-black relative overflow-hidden">
        <div className="bg-blue-200 text-white font-semibold z-10 px-2 pl-2 pr-2 flex items-center">
          Headlines
        </div>
        <Marquee speed={80}>
          {contentItems.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="inline pl-4 flex items-center text-lg md:text-xl">
              <div className="h-3 w-3 bg-blue-500 rounded-full mr-3"></div>
              <span>{item.text}</span>
            </a>
          ))}
        </Marquee>
      </div>
      <div className="border-t border-gray-400"></div>
    </div>
  );
};

export default Slider;
