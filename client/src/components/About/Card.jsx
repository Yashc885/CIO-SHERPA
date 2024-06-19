import React from 'react';

const Card = ({ title, content, imgSrc }) => {
  return (
    <div className="relative max-w-xs bg-white m-4 p-5 rounded-lg shadow-xl transition-all duration-300 h-80 group text-white hover:text-gray-900 ">
      <div className="relative w-64 h-64 -top-16 left-2 shadow-md z-10 transition-transform duration-300 group-hover:-translate-y-24">
        <img 
          className="w-full h-full object-cover rounded-lg"
          src={imgSrc} 
          alt="Example" 
        />
      </div>
      <div className="relative -top-40 p-4 text-center ">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Card;
