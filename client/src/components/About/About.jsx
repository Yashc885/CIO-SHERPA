import React from 'react';
import CardList from "@/components/About/Card";

export function About() {

  const cards = [
    { imageUrl: 'https://globalcioforum.com/wp-content/uploads/2018/05/working-day-in-office-PQPMBS4-800x450.jpg', title: 'Global Community', agla_page: '/global-community' },
    { imageUrl: 'https://globalcioforum.com/wp-content/uploads/2018/05/working-day-in-office-PQPMBS4-800x450.jpg', title: 'Best practise', agla_page: 'global-best-practise' },
    { imageUrl: 'https://globalcioforum.com/wp-content/uploads/2018/05/working-day-in-office-PQPMBS4-800x450.jpg', title: 'ALL bots', agla_page: '/all-bots' },
  ];

  return (
    <div className="mx-auto  bg-blue-300 p-8">
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">WHAT ARE WE</h1>
      <CardList cards={cards} /> 
    </div>
  );
}

export default About;
