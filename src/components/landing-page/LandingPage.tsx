"use client";

import React from "react";
import Navbar from "../reusable/Navbar";
import Banner from "./Banner";
import Footer from "../reusable/Footer";

const LandingPage = () => {
  return (
    <div className="bg-tertiary w-[100vw] h-[100vh] md:h-auto overflow-hidden">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default LandingPage;
