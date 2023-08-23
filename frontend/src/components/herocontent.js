"use client";

import hero from "../../public/images/image.jpg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";

function HeroContent() {
  const [blogs, setBlogs] = useState([]);
  const url = "http://127.0.0.1:8000/api/blogs/";
  let imageUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setBlogs(data);
        // console.log(blogs)
      });
  }, []);
  console.log(blogs);
  return (
    // <div className="container mx-auto">
    <div className="w-[100%] flex gap-8 my-5 container mx-auto items-start">
      <div className="w-[70%] ">
        {blogs.map((blog) => {
          return (
            <div className="w-[100%] border-2 border-[#0A91F2] rounded-lg p-2 flex gap-5 mb-5">
              <div className="w-[40%] h-[200px] rounded-lg">
                <img
                  src={`${imageUrl}${blog.blogImage}`}
                  className="w-[100%] h-[100%] rounded-lg"
                />
              </div>
              <div className="w-60%">
                <h1 className="text-[#0775C6] text-4xl my-3">
                  {blog.blogTitle}{" "}
                </h1>
                <p className="mb-3">{blog.blogPost}</p>
                <p className=" text-[#0A91F2] mb-3">
                  By {blog.author} | {blog.date_published} | 0 Comments
                </p>
                <Link href={`blogs/${blogs.id}`}>
                  {" "}
                  <button className="border-2 rounded-md px-10 text-center py-2 shadow text-[#1EB9EA] border-[#0A91F2]">
                    {" "}
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[30%] border-2 border-[#0A91F2] rounded-lg p-3">
        <div className="shadow p-2 my-3 flex gap-2 items-center">
          <AiOutlineSearch />
          <input placeholder="search" className="outline-0" />
        </div>
        <h2 className="text-black font-bold text-4xl text-center mb-3">
          Recent Blogs
        </h2>
        <p className="text-[#2eabd1] cursor-pointer underline px-4 my-2">
          How to setup Timeshift with BTRFS in Fedora How to setup Timeshift
          with BTRFS in Fedora ?
        </p>
        <p className="text-[#2eabd1] cursor-pointer underline px-4 my-2">
          How to setup Timeshift with BTRFS in Fedora How to setup Timeshift
          with BTRFS in Fedora?
        </p>
        <p className="text-[#2eabd1] cursor-pointer underline px-4 my-2">
          How to setup Timeshift with BTRFS in Fedora How to setup Timeshift
          with BTRFS in Fedora?
        </p>
      </div>
    </div>
    // </div>
  );
}
export default HeroContent;
