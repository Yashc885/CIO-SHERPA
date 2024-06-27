import CarouselIndicator from "./CarouselIndicator";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Ban1 from "./../../Assets/Home/Ban1.jpg";
import Ban2 from "./../../Assets/Home/Ban2.jpg";
import Ban3 from "./../../Assets/Home/Ban3.jpg";

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
          src={Ban1}
          alt="hbm construction cover image 1"
        />
      </div>
      <div>
        <Image
          height={720}
          width={1000}
          className="h-screen object-cover"
          src={Ban2}
          alt="hbm construction cover image 2"
        />
      </div>
      <div>
        <Image
          height={720}
          width={1000}
          className="h-screen object-cover"
          src={Ban3}
          alt="hbm construction cover image 3"
        />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
