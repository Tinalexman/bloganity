import React, { useState, useEffect } from "react";

import BlogContainer from "./BlogContainer";

import { tBlog } from "./types";
import { Loader } from "@mantine/core";

import { getAllBlogs } from "@/services/blogService";

const Banner = () => {
  const [blogs, setBlogs] = useState<tBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(true);

  const onSuccess = (res: any) => {
    setBlogs(res.data.payload as tBlog[]);
    setSuccess(true);
    setLoading(false);
  };

  const onError = (err: any) => {
    setLoading(false);
    setSuccess(false);
  };

  useEffect(() => {
    getAllBlogs(onSuccess, onError);
  }, []);

  return (
    <div className="flex flex-col w-full items-center md:pt-20">
      <h1 className="text-white text-4xl md:text-2xl md:text-center font-bold my-[2.5vh]">
        Check <span className="text-secondary-1">out</span> our latest{" "}
        <span className="text-primary">blogs</span>.
      </h1>
      {!loading && success && blogs.length > 0 && (
        <div className="w-full grid grid-cols-4 md:grid-cols-1 gap-5 px-20 md:px-5 h-[70vh] md:h-auto overflow-y-scroll scrollbar-custom mb-[4vh]">
          {blogs.map((blog, i) => {
            return <BlogContainer key={i} blog={blog} />;
          })}
        </div>
      )}

      { !loading && success && blogs.length === 0 && (
        <div className="w-full text-white text-2xl md:text-xl font-bold h-[70vh] md:px-5 md:text-center flex justify-center items-center">
          There are no blogs in the database in the moment.
        </div>
      )}
      {loading && (
        <div className="w-full h-[70vh] md:h-[87vh] flex justify-center items-center">
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
    </div>
  );
};

export default Banner;
