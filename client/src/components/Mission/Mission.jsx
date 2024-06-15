import React from 'react';
import Link from 'next/link';

const Mission = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec py-5 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h6 className="text-xl">
            Our <span className="text-blue-500">Mission</span> 
          </h6>
          <h1 className="font-bold text-3xl md:text-4xl">
            What We Do :
          </h1>
          <p className="sec-icon my-2 relative inline-block before:content-[''] before:absolute before:h-px before:left-[-70px] before:top-1/2 before:w-12 before:bg-gray-200 after:content-[''] after:absolute after:h-px after:right-[-70px] after:top-1/2 after:w-12 after:bg-black">
            <i className="fa-solid fa-gear"></i>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 justify-center mt-5">
          <MissionCard 
            title="Tracking Lead" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
            href="/tracking-lead"
          />
          <MissionCard 
            title="Advanced Targeting solution" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
            href="/advanced-targeting"
          />
          <MissionCard 
            title="Global Reach & Quality Traffic" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
            href="/global-reach"
          />
          <MissionCard 
            title="Flexible pricing models" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
            href="/flexible-pricing"
          />
          <MissionCard 
            title="Advanced optimization " 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
            href="/advanced-optimization"
          />
          <MissionCard 
            title="Account management team" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
            href="/account-management"
          />
        </div>
      </div>
    </section>
  );
};

const MissionCard = ({ title, description, href }) => {
  return (
    <div className="col">
      <div className="service-card relative p-8 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 bg-white overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={href}
           className="  text-blue-500  hover:underline transition-colors">Explore more 
        </Link>
        <div className="service-card-hover absolute top-[-100%] left-0 w-full h-full bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-500 z-[-1]"></div>
      </div>
    </div>
  );
};

export default Mission;
