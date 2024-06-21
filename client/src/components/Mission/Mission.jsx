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
            title="BFSI" 
            description="Driving financial innovation and security to meet evolving market demands in the banking, finance, and insurance sectors."
            href="/tracking-lead"
          />
          <MissionCard 
            title="Healthcare" 
            description="Transforming patient care and operational efficiency through cutting-edge technologies and medical advancements."
            href="/advanced-targeting"
          />
          <MissionCard 
            title="Travel & Hospitality: " 
            description="Enhancing customer experiences and operational excellence in the dynamic travel and hospitality industry."
            href="/global-reach"
          />
          <MissionCard 
            title="Retail and E-commerce:" 
            description=" Revolutionising shopping experiences and supply chain efficiencies to meet digital consumer demands."
            href="/flexible-pricing"
          />
          <MissionCard 
            title="Supply Chain Management (SCM):  " 
            description="Optimising logistics and distribution networks for seamless global operations and supply chain resilience.."
            href="/advanced-optimization"
          />
          <MissionCard 
            title="Education & Technology:" 
            description=" Empowering learners and educators with transformative technology solutions for enhanced educational outcomes."
            href="/account-management"
          />
          <MissionCard 
            title="Agriculture:" 
            description=" Innovating sustainable practices and improving yield through technology-driven agricultural advancements."
            href="/account-management"
          />       
           <MissionCard 
            title="Government & Public Services:" 
            description=" Enhancing governance and citizen services through digital transformation and efficient public administration."
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
