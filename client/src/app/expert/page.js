"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import ExpertPage from "@/components/Expert/ExpertPage";
import Slider from "@/components/Common/Slider.jsx"
export default function page() {
  return (
    <div>
      <Slider />
      <NavbarSimple />
        <ExpertPage />
    </div>
  );
}
