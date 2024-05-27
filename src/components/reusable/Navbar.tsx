import React from "react";

import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

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
        <HiOutlineMenuAlt3
          onClick={open}
          size={"26px"}
          className="text-white hidden md:block"
        />
      </div>
      <Drawer.Root
        opened={opened}
        onClose={close}
        position={"right"}
        padding={"0px"}
        top={"0px"}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Body>
            <div className="bg-tertiary w-full h-[100vh] flex flex-col p-5">
              <div className="flex w-full items-center justify-between">
                <h2 className="text-3xl md:text-xl font-bold text-primary">
                  Bloganity
                </h2>
                <IoMdClose size={"26px"} fill="#FFFFFF" onClick={close} />
              </div>

              <div className="mt-20">
                <Link
                  href={"/create-blog"}
                  className="bg-tertiary border-2 flex justify-center border-primary hover:bg-primary font-medium hover:font-bold text-primary hover:text-white text-xl rounded-full py-2 w-full shadow-custom-1 transition-all duration-300 ease-out"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};

export default Navbar;
