"use client";

import React, { useState, FC, useEffect } from "react";
import Navbar from "../reusable/Navbar";
import Footer from "../reusable/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bloganityKey } from "@/constants";

import { useRouter } from "next/navigation";

import { editBlog, getBlog } from "@/services/blogService";
import { Loader } from "@mantine/core";

const EditBlog: FC<{ id: string }> = ({ id }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [blogID, setBlogID] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  const onSuccess = (res: any) => {
    toast.success("Yippee. Your blog has been updated");
    setLoading(false);
    router.back();
  };

  const onError = (error: any) => {
    toast.error("An error occurred while updating your blog. Please try again");
    setLoading(false);
  };

  function edit() {
    if (title.length === 0) {
      toast.error("You need to provide a title for your blog.");
      return;
    }

    if (content.length === 0) {
      toast.error("Where's the content???? :(");
      return;
    }

    let details = window.localStorage.getItem(bloganityKey);
    if (details !== null) {
      setLoading(true);

      let token = JSON.parse(details).token;

      editBlog(
        {
          content: content,
          title: title,
          _id: blogID
        },
        token,
        onSuccess,
        onError
      );
    } else {
      toast.error("You need to be logged in to edit a blog");
      return;
    }
  }

  useEffect(() => {
    let details: string | null = window.localStorage.getItem(bloganityKey);
    if (details !== null) {
      let detail = JSON.parse(details);
      setAuthor(detail.name);
    }
  }, []);

  useEffect(() => {
    // get the blog and set the props
    getBlog(
      id,
      (res) => {
        setTitle(res.data.payload.title);
        setContent(res.data.payload.content);
        setBlogID(res.data.payload._id);
        setLoading(false);
      },
      (err) => {
        toast.error(
          "An error occurred while getting the blog. Please try again."
        );
        setLoading(false);
      }
    );
  }, []);

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
      <div className="bg-tertiary w-[100vw] h-[100vh] md:h-auto">
        <Navbar />
        <div className="flex flex-col gap-10 w-full h-[85vh] md:h-auto items-center md:pt-20 md:pb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl md:text-2xl md:text-center font-bold">
              Tweak <span className="text-secondary-1">your</span>{" "}
              <span className="text-primary">blog</span>.
            </h1>
            <p className="text-tertiary-1 text-md text-center">
              At least, you&apos;re back. Duhhh
            </p>
          </div>

          <div className="flex flex-col gap-5 w-[50%] md:w-full md:px-5 items-center">
            <div className="w-full">
              <p className="text-tertiary-1 text-md">Title</p>
              <input
                type="text"
                value={title}
                placeholder="What are you writing about?"
                className="w-full h-[50px] rounded border-2 border-tertiary-1 font-medium text-white  px-4 bg-tertiary"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-full">
              <p className="text-tertiary-1 text-md">Author</p>
              <input
                type="text"
                value={author}
                readOnly={true}
                placeholder="What's your name?"
                className="w-full h-[50px] rounded border-2 border-tertiary-1 font-medium text-white  px-4 bg-tertiary"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="w-full">
              <p className="text-tertiary-1 text-md">Content</p>
              <textarea
                value={content}
                placeholder="Share your story..."
                className="w-full h-[150px] rounded border-2 scrollbar-custom resize-none  border-tertiary-1 font-medium text-white p-4 bg-tertiary"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button
              onClick={edit}
              className="bg-primary w-[150px] h-[50px] rounded text-white font-semibold shadow-custom-1"
            >
              {loading ? <Loader color="primary" /> : "Update blog"}
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EditBlog;
