import CarouselIndicator from "./CarouselIndicator";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showThumbs={false}
      interval={5000}
      stopOnHover={false}
      showStatus={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => (
        <CarouselIndicator
          onClickHandler={onClickHandler}
          isSelected={isSelected}
          index={index}
          label={label}
        />
      )}
    >
      <div>
        <Image
          height={720}
          width={1000}
          className="h-screen object-cover"
          src="https://i.pinimg.com/736x/32/bd/0b/32bd0ba1b48a5f3ec26c333b78f2a282.jpg"
          alt="hbm construction cover image 1"
        />
      </div>
      <div>
        <Image
          height={720}
          width={1000}
          className="h-screen object-cover"
          src="https://st4.depositphotos.com/20524830/26161/i/450/depositphotos_261611630-stock-photo-blue-vivid-image-globe-globalization.jpg"
          alt="hbm construction cover image 2"
        />
      </div>
      <div>
        <Image
          height={720}
          width={1000}
          className="h-screen object-cover"
          src="https://previews.123rf.com/images/milkos/milkos2009/milkos200904236/156414819-global-economy-3d-world-globe-over-blue-background-with-financial-graphs-and-economics-statistics.jpg"
          alt="hbm construction cover image 3"
        />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
