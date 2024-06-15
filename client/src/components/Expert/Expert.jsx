import React from 'react';

const Card = ({ imageSrc, title, text }) => {
  return (
    <div className="mx-auto max-w-2xl bg-white">
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              className="object-cover w-full h-64 md:h-auto"
              src={imageSrc}
              alt="Card image"
            />
          </div>
          <div className="p-4 md:w-1/2 bg-white">
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-700 mb-4 text-sm md:text-base">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Expert() {
  return (
    <div className="flex justify-center">
      <Card
        imageSrc="https://picsum.photos/450/300?image=1072"
        title="Swati Gupta"
        // content length restricted 
        text="The Carousel code can be replaced with an img src, no problem. The added some adjustments to the prev/next buttons  is rounded now."
      />
    </div>
  );
}
