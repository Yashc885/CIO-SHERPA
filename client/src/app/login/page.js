"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import Login from "./../../components/Login/Login.jsx";
import Slider from "@/components/Common/Slider.jsx"
export default function page() {
  return (
    <div>
      <Slider />
      <NavbarSimple />
        <Login />
    </div>
  );
}
