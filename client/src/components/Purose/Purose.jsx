import React from 'react';
import "./Purose.css";
const Purose = () => {
  return (
    <div>
      <section className="min-h-screen  text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
        <span className="text-blue-900  text-semibold text-lg text-lg max-w-lg mx-auto mb-2 capitalize flex items-center"  data-aos="flip-left" duration = "2500" >
        What We Do?
        </span>
        <h1 className="text-gray-700 text-2xl md:text-3xl xl:text-4xl font-semibold max-w-3xl mx-auto mb-16 leading-snug"  data-aos="flip-right" duration = "2500">
        CIO Sherpa Council Initiatives
        </h1>
        <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto"  data-aos="fade-out" duration = "2500" >
          <div className="card bg-gray-700 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-52">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Hall of Fame </h2>
              <p className="text-gray-400">Connect with IT leaders, exchange best practices, and gain valuable regional insights to drive innovation and productivity.
                                             This summit celebrates excellence and builds a robust network of top-tier professionals.</p>
            </div>
            <div className="icon"></div>
          </div>
          <div className="card bg-gray-700 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">CIO Bridge</h2>
              <p className="text-gray-400">Foster collaboration and knowledge sharing among IT leaders through exclusive sessions that bridge the gap between innovation and practical implementation, enhancing professional growth and leadership development</p>
            </div>
          </div>
          <div className="card bg-gray-700 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-44">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">CIO TECHBOT</h2>
              <p className="text-gray-400">Engage with advanced technology discussions and expert insights through our CIO TechBOT platform, designed to keep IT leaders ahead of the curve and equip them with the latest tech trends and strategies.</p>
            </div>
          </div>
          <div className="card bg-gray-700 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Spark Innovation Hub</h2>
              <p className="text-gray-400">Ignite creativity and innovation within the tech community by participating in the Spark Innovation Hub, where groundbreaking ideas are nurtured, and leaders are empowered to drive transformational change </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purose;
