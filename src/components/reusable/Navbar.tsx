import React from "react";

import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className="w-full h-[10vh] md:h-[8vh] flex justify-between items-center px-20 md:px-5">
        <Link href={"/"} className="text-3xl md:text-xl font-bold text-primary">
          Bloganity
        </Link>
        <Link
          href={"/create-blog"}
          className="bg-tertiary border-2 flex justify-center border-primary hover:bg-primary font-medium hover:font-bold text-primary hover:text-white text-xl md:hidden rounded-full py-2 w-[150px] shadow-custom-1 transition-all duration-300 ease-out"
        >
          Get Started
        </Link>
        <HiOutlineMenuAlt3 onClick={open} size={"26px"} className="text-white hidden md:block" />
      </div>
      <Drawer opened={opened} onClose={close}>
        

      </Drawer>
    </>
  );
};

export default Navbar;
