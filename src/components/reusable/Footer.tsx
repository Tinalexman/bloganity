import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-tertiary-1 text-md text-center flex md:flex-col md:items-center md:gap-2 md:pb-5 justify-center gap-10">
      <div className="flex items-center w-fit gap-2">
        Made with{" "}
        <span>
          <FaHeart size={"20px"} fill="#FF0000" />
        </span>{" "}
        by{" "}
        <span className="font-bold underline cursor-pointer">
          <a href="https://github.com/Tinalexman">Tinalexman</a>
        </span>
      </div>
      <div>
        <a
          target="_blank"
          className="underline"
          href="https://icons8.com/icon/82171/lady-window-image"
        >
          Blog Icon
        </a>{" "}
        by{" "}
        <a target="_blank" className="underline" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </div>
  );
};

export default Footer;
