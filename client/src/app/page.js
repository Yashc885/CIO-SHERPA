"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import { Home } from "@/components/Home/Home";
import About from "@/components/About/About";
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
      <Home />
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
