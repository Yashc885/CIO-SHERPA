import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card1 from '@/Assets/Service/Education.png';

const cards = [
  { id: 1, src: Card1, alt: 'Card 1', link: '/page1' },
  { id: 2, src: Card1, alt: 'Card 2', link: '/page2' },
  { id: 3, src: Card1, alt: 'Card 3', link: '/page3' },
  { id: 4, src: Card1, alt: 'Card 4', link: '/page4' },
  { id: 5, src: Card1, alt: 'Card 5', link: '/page5' },
  { id: 6, src: Card1, alt: 'Card 6', link: '/page6' },
  { id: 7, src: Card1, alt: 'Card 7', link: '/page7' },
  { id: 8, src: Card1, alt: 'Card 8', link: '/page8' },
];

const Service = () => {
  return (
    <div className="py-8 mx-auto bg-blue-50">
      <div className="w-full py-4 px-4 md:px-8">
        <div className="py-4">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="pl-4 pr-4 md:pl-0 md:pr-8">
                <h2 className="text-2xl font-bold uppercase text-blue-900 mb-4"  data-aos="flip-left" duration = "2500">Core Values</h2>
                <div className="py-1 text-justify">
                  <p className="font-semibold text-lg text-gray-700" data-aos="fase-left" duration = "2500" > Taking a look at the industry-specific advancements, opportunities, challenges and best practices.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="pl-4 pr-4 md:pl-8 md:pr-0">
                <div className="text-justify">
                  <p className="text-gray-700">
                    Our vertical/industry driven research and analyses allows members to delve deeper into the existing landscape of the industry
                    they are working in and align it with the global counterparts. Learn more about relevant reports, best practices, case studies, and member opinions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="grid gap-8 p-4 m-4 auto-cols-fr auto-rows-min" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))' }}>
        {cards.map((card) => (
          <li
            key={card.id}
            className="relative rounded-lg shadow-xl transition transform ease-in-out duration-300"
          >
            <Link href={card.link} data-aos="zoom-out" data-aos-duration="4500" >
              <Image
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-cover rounded-lg opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:border-4 hover:border-white"
                layout="responsive"
                width={150}
                height={150}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
