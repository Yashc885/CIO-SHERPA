"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import News from "@/components/News/News";
import Slider from "@/components/Common/Slider.jsx"
export default function page() {
  return (
    <div>
      <Slider />
      <NavbarSimple />
     <News />
    </div>
  );
}
