"use client";

import React, { useState, FC, useEffect} from "react";
import Navbar from "../reusable/Navbar";
import Footer from "../reusable/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBlog:FC<{id: string}> = ({id}) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  function createBlog() {
    if (title.length === 0) {
      toast.error("You need to provide a title for your blog.");
      return;
    }

    if (author.length === 0) {
      toast.error("Won't you let us know who you are?");
      return;
    }

    if (content.length === 0) {
      toast.error("Where's the content???? :(");
      return;
    }

    
  }

  useEffect(() => {
    // get the blog and set the props


  }, [])


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
              onClick={createBlog}
              className="bg-primary w-[150px] h-[50px] rounded text-white font-semibold shadow-custom-1"
            >
              Update blog
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EditBlog;
