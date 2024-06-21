import React from 'react' ;
import {CarouselDefault} from "@/components/Home/Carousel";
import Slider from "@/components/Common/Slider.jsx"
import { NavbarSimple } from "@/components/Common/Navbar";
export function Home() {
    return (
      <div className="min-h-screen ">
        <CarouselDefault />
        <div className="py-4 items-center justify-center text-center ">
          {/* <Slider /> */}
        </div>
      </div>
    );
  }
  
  export default  Home;