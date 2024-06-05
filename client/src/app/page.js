"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import { Home } from "@/components/Home/Home";
import {About} from "@/components/About/About";
import { Header } from "@/components/Common/Header";
export default function page() {
  return (
    <>
    <Header />
    <NavbarSimple />
      <Home />
      <About />
    </>
  );
}
