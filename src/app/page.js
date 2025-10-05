"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Testimonial />
      <Experience />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
