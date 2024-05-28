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
import { getBlog, deleteBlog } from "@/services/blogService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bloganityKey } from "@/constants";

const Blog: FC<{ id: string }> = ({ id }) => {
  const [blog, setBlog] = useState<tBlog>({
    content: "",
    _id: "",
    author: "",
    createdAt: "",
    title: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const [owner, setOwner] = useState<boolean>(false);

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    getBlog(
      id,
      (res) => {
        setBlog(res.data.payload);
        setSuccess(true);
        setLoading(false);

        let details = window.localStorage.getItem(bloganityKey);
        if (details !== null) {
          details = JSON.parse(details).name;
          setOwner(res.data.payload.author === details);
        }
      },
      (err) => {
        toast.error(
          "An error occurred while getting the blog. Please try again."
        );
        setLoading(false);
        setSuccess(false);
      }
    );
  }, []);

  function deleteThisBlog() {
    let details = window.localStorage.getItem(bloganityKey);
    if (details !== null) {
      setLoading(true);

      let token = JSON.parse(details).token;

      deleteBlog(
        blog._id,
        token,
        (res: any) => {
          close();
          window.location.replace("/blogs");
        },
        (err: any) => {
          toast.error("An error occurred while trying to delete the blog");
          setLoading(false);
          setSuccess(false);
          close();
        }
      );
    } else {
      toast.error("You need to be logged in to edit a blog");
      return;
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
                {convertDate(new Date(blog.createdAt))}
              </span>
            </p>

            <div className="bg-secondary-2 w-full h-[450px] md:h-[250px] rounded flex justify-center items-center">
              <h2 className="text-white text-2xl font-bold text-center">
                Blog Image
              </h2>
            </div>
            <p className="text-white text-lg">{blog.content}</p>

            {owner && (
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
            )}
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
                  onClick={deleteThisBlog}
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
