import React, { useState, useEffect } from "react";

import BlogContainer from "./BlogContainer";

import { tBlog } from "./types";

const Banner = () => {
  const blogs: tBlog[] = Array(10).fill({
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
  });

  return (
    <div className="flex flex-col w-full items-center md:pt-20">
      <h1 className="text-white text-4xl md:text-2xl md:text-center font-bold my-[2.5vh]">
        Check <span className="text-secondary-1">out</span> our latest <span className="text-primary">blogs</span>.
      </h1>
      <div className="w-full grid grid-cols-4 md:grid-cols-1 gap-5 px-20 md:px-5 h-[70vh] md:h-auto overflow-y-scroll scrollbar-custom mb-[4vh]">
        {blogs.map((blog, i) => {
          return <BlogContainer key={i} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Banner;
