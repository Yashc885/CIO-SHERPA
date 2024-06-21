"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import CustomerGrid from "@/components/Customer/CustomerGrid";
import Slider from "@/components/Common/Slider.jsx"
export default function page() {
  return (
    <div>
      <Slider />
      <NavbarSimple />
    <CustomerGrid />
    </div>
  );
}
