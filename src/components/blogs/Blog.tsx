"use client";

import React, { FC, useEffect, useState } from "react";
import Footer from "../reusable/Footer";
import Navbar from "../reusable/Navbar";
import { tBlog } from "./types";

import { convertDate } from "@/functions/dateFunctions";
import { Loader, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const Blog: FC<{ id: string }> = ({ id }) => {
  const [blog, setBlog] = useState<tBlog>({
    content: "",
    _id: "",
    author: "",
    date: new Date(),
    title: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(true);

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setBlog({
      content: `
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
          id est laborum.\n
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
          nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
          id est laborum.\n
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
          nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          `,
      title: "Testing 123",
      date: new Date(),
      author: "Alabi Tanimowo",
      _id: "ID",
    });
  }, []);

  function deleteBlog() {

  }

  return (
    <>
      <div className="bg-tertiary w-[100vw] md:h-auto">
        <div className="md:fixed md:w-full md:bg-tertiary">
          <Navbar />
        </div>

        {!loading && success && (
          <div className="flex flex-col items-center px-20 md:px-5 gap-5 md:pt-20 pb-10">
            <h1 className="text-white font-bold text-4xl mt-5">{blog.title}</h1>
            <p className="text-white text-lg md:text-center">
              Written by {blog.author}
              {" on "}
              <span className="text-tertiary-1 font-bold">
                {convertDate(blog.date)}
              </span>
            </p>

            <div className="bg-secondary-2 w-full h-[450px] md:h-[250px] rounded flex justify-center items-center">
              <h2 className="text-white text-2xl font-bold text-center">
                Blog Image
              </h2>
            </div>
            <p className="text-white text-lg">{blog.content}</p>

            <div className="flex md:flex-col gap-5 w-fit md:w-full my-10">
              <Link
                href={`/edit-blog/${blog._id}`}
                className="bg-primary w-[150px] flex items-center justify-center  md:w-full h-[50px] rounded text-white font-medium"
              >
                Edit Blog
              </Link>

              <button
                onClick={open}
                className="bg-secondary w-[150px] md:w-full h-[50px] rounded text-white font-medium"
              >
                Delete Blog?
              </button>
            </div>
          </div>
        )}

        {loading && (
          <div className="w-full h-[85vh] md:h-[87vh] flex justify-center items-center">
            <Loader size={"36px"} color="primary" />
          </div>
        )}

        {!success && (
          <div className="w-full h-[85vh] md:h-[87vh] flex flex-col gap-2 justify-center items-center">
            <h2 className="text-white text-2xl md:text-xl font-bold">
              An error occurred. Please try again
            </h2>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary w-[120px] md:w-full text-lg text-white font-medium rounded-full py-2 "
            >
              Refresh
            </button>
          </div>
        )}
        <Footer />
      </div>
      <Modal.Root
        opened={opened}
        onClose={close}
        padding={"0px"}
        top={"0px"}
        centered
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body>
            <div className="flex flex-col gap-5 px-6 py-6 bg-tertiary">
              <div className="flex justify-between items-center">
                <h2 className="text-white font-bold text-3xl">Delete Blog?</h2>
                <IoMdClose size={"26px"} onClick={close} fill="#FFFFFF" />
              </div>
              <p className="text-white text-lg">
                Are you sure you want to delete this blog?
              </p>
              <div className="flex md:flex-col md:gap-5 w-full justify-between">
              <button
                onClick={close}
                className="bg-primary w-[120px] md:w-full h-[50px] rounded text-white font-medium"
              >
                No
              </button>

              <button
                onClick={deleteBlog}
                className="bg-secondary w-[120px] md:w-full h-[50px] rounded text-white font-medium"
              >
                Yes
              </button>
              </div>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default Blog;
