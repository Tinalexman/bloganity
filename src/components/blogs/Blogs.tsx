"use client";

import React from "react";
import Navbar from "../reusable/Navbar";
import Footer from "../reusable/Footer";
import Banner from "./Banner";

const Blogs = () => {
  return (
    <div className="bg-tertiary w-[100vw] h-[100vh] md:h-auto">
      <div className="md:fixed md:w-full md:bg-tertiary">
        <Navbar />
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default Blogs;
