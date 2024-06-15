"use client";
import { NavbarSimple } from "@/components/Common/Navbar";
import { Home } from "@/components/Home/Home";
import {About} from "@/components/About/About";
import { Header } from "@/components/Common/Header";
import Partner  from "@/components/Partner/Partner";
import Service from "@/components/Service/Service";
import CustomerGrid from "@/components/Customer/CustomerGrid";
import News from "@/components/News/News";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Mission from "@/components/Mission/Mission";
import ExpertPage from "@/components/Expert/ExpertPage";
export default function page() {
  return (
    <div>
      <Header />
      <NavbarSimple />
      <Home />
      <About />
      <Partner/>
        <Service />
        <ExpertPage />
        <Mission />
        <News />
        <CustomerGrid />
        <Contact />
      <Footer />
    </div>
  );
}
