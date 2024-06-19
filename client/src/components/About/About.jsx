import React from 'react';
import Card from './Card';

const cardData = [
  {
    title: 'Empower',
    content: 'Fostering innovation & excellence through empowerment cultivates creativity, drives high performance, and propels pioneering advancements for exceptional success.',
    imgSrc: 'https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg',
  },
  {
    title: 'Elevate',
    content: 'Lighthouse leadership inspires direction, guiding teams to elevate their goals, aligning vision with action for transformative growth and success..',
    imgSrc: 'https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg',
  },
  {
    title: 'Give Back',
    content: 'Building a sustainable tech community to give back, fostering collaboration and innovation for lasting positive impact and growth.',
    imgSrc: 'https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg',
  },
  
];

const About = () => {
  return (
    <div >
    <div className=" items-center justify-center min-h-screen bg-blue-100 p-8">
    <div className="text-center">
        <h1 className=" justify text-extrabold text-2xl md:text-3xl lg:text-4xl text-blue-900 text-semibold" data-aos="slide-left" data-aos-duration="1500" >About Us</h1>
        <div className="mt-2 justify-center items-center">
            <div className="pl-2 pr-2 md:pl-4 md:pr-4">
                <p className="text-lg md:text-xl" data-aos="slide-right" data-aos-duration="1500" >
                The CIO Sherpa Council is a distinguished global community designed exclusively for Chief Information
                 Officers (CIOs/CDOs) and IT leaders. We cultivate collaboration, facilitate knowledge exchange, 
                 and promote continuous professional growth to drive innovation, boost productivity, and champion CSR initiatives. 
                Through mentorship, networking, and upskilling, we empower IT leaders to excel and contribute to a global community of excellence.
                </p>
            </div>
        </div>
    </div>
    <div className="py-24 items-center justify " data-aos="slide-left" data-aos-duration="1500" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            content={card.content}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </div>
    </div>
    </div> 
  );
}

export default About;
