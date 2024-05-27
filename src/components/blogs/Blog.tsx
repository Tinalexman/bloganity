"use client";

import React, { FC, useEffect, useState } from "react";
import Footer from "../reusable/Footer";
import Navbar from "../reusable/Navbar";
import { tBlog } from "./types";

import { convertDate } from "@/functions/dateFunctions";
import { Loader } from "@mantine/core";

const Blog: FC<{ id: string }> = ({ id }) => {
  const [blog, setBlog] = useState<tBlog>({
    content: "",
    _id: "",
    author: "",
    date: new Date(),
    title: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

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

  return (
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
        </div>
      )}

      {loading && (
        <div className="w-full h-[85vh] flex justify-center items-center">
          <Loader size={"36px"} color="primary"/>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Blog;
