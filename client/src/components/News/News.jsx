import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Main from "@/components/News/Main";
import Events from "@/components/News/Events";
const News = () => {
  return (
    <div className="mx-auto py-6 ">
        <div className="text-center">
        <p className="text-grey-300 text-center text-xl justify underline "> NEWS & EVENTS</p>
        <h2 className="text-2xl md:text-3xl font-semibold  justify text-center py-1 "> Stay updated with our latest news and events </h2>
            <div className="">
                <div className="md:flex py-4">
                    <div className="md:w-[50%]">
                    <div className=" md:pl-8 " data-aos="slide-left" data-aos-duration="1500">
                        <Main />
                    </div>
                    </div>
                    <div className="md:w-[50%]" data-aos="slide-right" data-aos-duration="1500">
                        <Events />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News