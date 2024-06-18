import React from 'react';
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"; // corrected import for react-icons

const Card = ({ imageUrl, title, agla_page }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="object-cover w-full h-80 sm:h-96"
          src={imageUrl}
          alt={title}
        />
        </div>
        <div className=" absolute inset-0 flex flex-col justify-end">
        <div className="py-4 md:px-4 lg:px-8 xl:px-12 w-full bg-[#ffffff]">
    <h3 className="text-xl sm:text-2xl text-center font-semibold text-[#5A72A0] ">
        {title}
    </h3>
    <div className="flex justify-center items-center mt-2">
        <Link href={agla_page} className="text-sm sm:text-md lg:text-lg xl:text-xl flex  text-sm hover:underline hover:text-[#3ABEF9]">
            Discover Now <BsArrowRight className="ml-1 mt-1.5 " />
        </Link>
    </div>
</div>


      </div>
    </div>
  );
};

const CardList = ({ cards }) => { 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="slide-right" data-aos-duration="1500">
      {cards.map((item, index) => (
        <Card
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          agla_page={item.agla_page}
        />
      ))}
    </div>
  );
};

export default CardList;
