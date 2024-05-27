import React from "react";

import Image from "next/image";
import Link from "next/link";

import BlogImage from "@/assets/blog-image.svg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-full h-[85vh] md:h-auto flex md:flex-col justify-between px-20 md:px-5 relative">
      <motion.div
        animate={{
          scale: [1.0, 1.05, 1.0],
          opacity: [0.1, 0.3, 0.1],
          transition: {
            duration: 5,
            ease: "easeOut",
            repeat: Infinity,
          },
        }}
        className="w-[70vw] md:w-[70vh] h-[70vw] md:h-[70vh] opacity-10 rounded-full -z-5 border-2 border-secondary-2 absolute top-[calc(50vh-35vw)] md:top-[15vh] left-[15vw] md:left-[calc(50vw-35vh)]"
      />
      <motion.div
        animate={{
          scale: [1.0, 1.05, 1.0],
          opacity: [0.1, 0.3, 0.1],
          transition: {
            duration: 5,
            ease: "easeOut",
            repeat: Infinity,
          },
        }}
        className="w-[50vw] md:w-[50vh] h-[50vw] md:h-[50vh] opacity-10 rounded-full -z-5 border-2 border-secondary-2 absolute top-[calc(50vh-25vw)] md:top-[25vh] left-[25vw] md:left-[calc(50vw-25vh)]"
      />

      <motion.div
        animate={{
          scale: [1.0, 1.05, 1.0],
          opacity: [0.1, 0.3, 0.1],
          transition: {
            duration: 5,
            ease: "easeOut",
            repeat: Infinity,
          },
        }}
        className="w-[30vw] md:w-[30vh] h-[30vw] md:h-[30vh] opacity-10 rounded-full -z-5 border-2 border-secondary-2 absolute top-[calc(50vh-15vw)] md:top-[35vh] left-[35vw] md:left-[calc(50vw-15vh)]"
      />

      <motion.div
        animate={{
          scale: [1.0, 1.05, 1.0],
          opacity: [0.1, 0.3, 0.1],
          transition: {
            duration: 5,
            ease: "easeOut",
            repeat: Infinity,
          },
        }}
        className="w-[10vw] md:w-[10vh] h-[10vw] md:h-[10vh] opacity-10 rounded-full -z-5 border-2 border-secondary-2 absolute top-[calc(50vh-5vw)] md:top-[45vh] left-[45vw] md:left-[calc(50vw-5vh)]"
      />

      <div className="flex flex-col w-[600px] md:w-full mt-[20vh] md:mt-20 gap-5 z-10">
        <h1 className="text-white font-bold text-6xl md:text-3xl md:text-center">
          <span className="text-secondary">Create</span> a{" "}
          <span className="text-primary">unique</span> and{" "}
          <span className="text-secondary-2">beautiful</span> blog
        </h1>
        <p className="text-white text-lg font-medium md:text-center">
          There&apos;s no other place that combines such an excellent level of
          writing with a truly engaged and active community. Bloganity is truly
          where ideas are born, shared and spread.{" "}
        </p>
        <Link
          href={"/blogs"}
          className="bg-primary flex justify-center font-medium hover:font-bold opacity-80 hover:opacity-100 text-white text-xl rounded-full py-4 w-[200px] md:w-full shadow-custom-1 transition-all duration-300 ease-out"
        >
          Let&apos;s go!
        </Link>
      </div>
      <motion.div className="w-[45vw] md:w-full md:mt-20 md:mb-20 mt-[20vh]">
        <Image
          src={BlogImage}
          width={400}
          height={400}
          alt="blog image"
          className="w-full h-auto object-fit"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
