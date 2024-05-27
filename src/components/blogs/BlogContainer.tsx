import React, { FC } from "react";
import { iBlogProp } from "./types";
import { convertDateWithJustSlashes } from "@/functions/dateFunctions";
import Link from "next/link";

const BlogContainer: FC<iBlogProp> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog._id}`} className="flex flex-col gap-3 ">
      <div className="bg-secondary-2 w-full h-[150px] rounded flex justify-center items-center">
        <h2 className="text-white text-2xl font-bold text-center">Blog Image</h2>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-white font-semibold text-xl w-[70%] line-clamp-1">
          {blog.title}
        </h2>
        <p className="text-tertiary-1 text-md">
          {convertDateWithJustSlashes(blog.date)}
        </p>
      </div>
      <p className="text-white font-medium text-md">{blog.content.substring(0, 80)}...</p>
    </Link>
  );
};

export default BlogContainer;
