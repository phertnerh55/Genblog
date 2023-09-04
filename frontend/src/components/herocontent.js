"use client";

import hero from "../../public/images/image.jpg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";

function HeroContent() {
  const [blogs, setBlogs] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");
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
        data.forEach((blogDate)=>{
          const date = new Date(blogDate.date_published);
          const year = date.getFullYear();
          const month = date.toLocaleString("default", { month: "long" });
          const day = date.getDay();
          setFormattedDate(`${day} ${month} ${year}`);
        })
      });
  }, []);
  console.log(blogs);
  return (
    // <div className="container mx-auto">
    <div className="w-[100%] flex gap-8 my-6 container mx-auto items-start">
      <div className="w-[70%] ">
        {blogs.map((blog) => {
          return (
            <div className=" shadow-[0_0_5px_lightgray] rounded-lg p-2 flex gap-5 mb-5">
              <div className="w-[300px] h-[200px] rounded-lg">
                <img
                  src={`${imageUrl}${blog.blogImage}`}
                  className="w-[100%] h-[100%] rounded-lg"
                />
              </div>
              <div className="w-[70%]">
                <h1 className="text-[#0775C6] text-[1.4rem] mb-2">
                  {blog.blogTitle}
                </h1>
                <p
                  className="mb-2"
                  dangerouslySetInnerHTML={{
                    __html: `${blog.blogPost.substr(0, 500)}...`,
                  }}
                ></p>
                <p className=" text-[#0A91F2] mb-3">
                  By {blog.author} | {formattedDate} | 0 Comments
                </p>
                <Link href={`blogs/${blog.id}`}>
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
      <div className="w-[30%] shadow-[0_0_5px_lightgray] rounded-lg p-3">
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
