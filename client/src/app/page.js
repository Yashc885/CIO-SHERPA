"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import  Home  from "@/components/Home/Home";
import About from "@/components/About/About";
import HeroCarousel from './../components/Home/HeroCarousel.jsx';
import TypeWriterEffect from "./../components/Home/TypeWriterEffect.tsx";
// import { Header } from "@/components/Common/Header";
import Brands  from "@/components/Brands/Brands";
import Service from "@/components/Service/Service";
import CustomerGrid from "@/components/Customer/CustomerGrid";
import News from "@/components/News/News";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Mission from "@/components/Mission/Mission";
import ExpertPage from "@/components/Expert/ExpertPage";
import Purose from "@/components/Purose/Purose";
import Slider from "@/components/Common/Slider.jsx"
export default function page() {
  return (
    <div>
    <Slider />
    <NavbarSimple />
    <div className="relative  ">
        <div className="absolute inset-0 ">
          <HeroCarousel />

          <div
            className="absolute inset-0 bg-gray-600"
            style={{ mixBlendMode: "multiply" }}
          ></div>
        </div>
        <div className=" max-w-sm md:max-w-2xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-2">
          <span className="text-5xl md:text-7xl font-bold w-full"  data-aos="zoom-in" duration = "1500" >
            Welcome to </span>
            <h1  className="text-primary text-5xl md:text-7xl font-bold w-full" data-aos="zoom-out" duration = "1500"  >
            
              CIO SHERPA COUNCIL .
            
          </h1>
          <div className="flex text-2xl w-full flex-col sm:flex-row  mt-2 ">
            <span className="mr-2" data-aos="fade-in " duration = "1500" >

            We Aim for 
            </span>
            <h2 className=" text-primary text-[#219C90] font-bold">
              <TypeWriterEffect
                strings={["community ", "Innovation.", "Suceeding."]}
                cursor="⚒"
              />
            </h2>
          </div>
        </div>
      </div>

      <About />
        <Service />
        {/* <ExpertPage /> */}
        <Purose />
        <Mission />
        <Brands/>
        <CustomerGrid />
        {/* <Contact /> */}
      <Footer />
    </div>
  );
}
