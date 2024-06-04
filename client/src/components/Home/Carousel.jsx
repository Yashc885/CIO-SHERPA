import { useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import {Hero} from "@/Assets/Home/hero.jpg";
export function CarouselDefault() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-[100%]  sm:flex py-4 sm:py-8 pl-4 sm:pl-8 ">
    <div className="sm:w-[50%]">
    <Carousel
      className=""
      autoplay
      autoplayInterval={500}
      onNextClick={handleNext}
      onPrevClick={handlePrev}
      currentIndex={currentIndex}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`image ${index + 1}`}
          className="object-fit: contain h-full w-full flex flex-col justify-center items-center"
          width={100} 
          height={100} 
        />
      ))}
    </Carousel>
    </div>
    <div className="sm:w-[50%] pl-4 sm:pl-8 pr-4 sm:pr-8">
    <div className="grid  grid-cols-2 gap-4">
          <div>
            <img
              className="h-[200px] w-[250px] hover:ease-in-ease-out rounded-sm shadow-lg object-cover"
              src="https://cxotechbot.com/assets/content/cxomay.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[200px] w-[250px] rounded-sm shadow-lg object-cover"
              src="https://cxotechbot.com/assets/content/cxomay.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[200px] w-[250px] rounded-sm shadow-lg object-cover"
              src="https://cxotechbot.com/assets/content/cxomay.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[200px] w-[250px] rounded-sm shadow-lg object-cover"
              src="https://cxotechbot.com/assets/content/cxomay.jpg"
              alt=""
            />
          </div>
    </div>
    </div>
    </div>
  );
}
