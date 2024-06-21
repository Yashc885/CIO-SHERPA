"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import FAQ from "./../../components/FAQ/FAQ.jsx";
import Slider from "@/components/Common/Slider.jsx"
export default function page() {
  return (
    <div>
      <Slider />
      <NavbarSimple />
        <FAQ />
    </div>
  );
}
