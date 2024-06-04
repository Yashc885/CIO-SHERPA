"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import { Header } from "@/components/Common/Header";
import {CarouselDefault} from "@/components/Home/Carousel";
export default function page() {
  return (
    <>
      <Header/>
      <NavbarSimple />
      <CarouselDefault />
    </>
  );
}
