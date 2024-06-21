import { useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Slider from "@/components/Common/Slider.jsx";
import { NavbarSimple } from "@/components/Common/Navbar";

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
    <div className="w-full h-screen overflow-hidden"> 
      <Slider />
      <NavbarSimple />
      <Carousel
        autoplay
        autoplayInterval={5000}
        onNextClick={handleNext}
        onPrevClick={handlePrev}
        currentIndex={currentIndex}
        className="h-full"
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full flex justify-center items-center">
            <Image
              src={image}
              alt={`image ${index + 1}`}
              className="object-cover"
              layout="fill" // This makes the image take up the full container
              quality={100} // Ensures the image quality is not reduced
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
