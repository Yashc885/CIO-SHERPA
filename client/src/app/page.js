"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import { Home } from "@/components/Home/Home";
import {About} from "@/components/About/About";
import { Header } from "@/components/Common/Header";
import Partner  from "@/components/Partner/Partner";
import Service from "@/components/Service/Service";
import Customer from "@/components/Customer/Customer";
import News from "@/components/News/News";
export default function page() {
  return (
    <div>
      <Header />
      <NavbarSimple />
      <Home />
      <About />
      <Partner/>
      <div  >
        <Service />
        <Customer />
        <News />
      </div>
    </div>
  );
}
