import React from 'react';
import "./Purose.css";
const Purose = () => {
  return (
    <div>
      <section className="min-h-screen  text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
        <span className="text-black  text-semibold text-lg text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
          Our Services : 
        </span>
        <h1 className="text-gray-700 text-2xl md:text-3xl xl:text-4xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
          Services Built Specifically for your Business
        </h1>
        <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-52">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">UI/UX <br /> creative design</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
            <div className="icon"></div>
          </div>
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">visual <br /> graphic design</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-44">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">strategy & <br />digital marketing</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">effective<br /> business growth</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purose;
