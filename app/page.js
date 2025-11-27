'use client'

import Navbar from "./components/Navbar"
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
         <>
         <Navbar/>
         <Hero/>
         <About/>
         <Contact/>
         <Footer/>
         </>
  );
}
