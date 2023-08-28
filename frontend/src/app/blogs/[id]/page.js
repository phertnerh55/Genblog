"use client";
import Nav from "@/components/nav";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import axios from 'axios';
import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import { useRouter } from "next/navigation";
function SingleBlog({ params }) {
  const [singleBlog, setSingleBlog] = useState();
  const url = `http://127.0.0.1:8000/api/blogs/${params.id}`;
  let imageUrl="http://127.0.0.1:8000/api";
  const router = useRouter();
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSingleBlog(data);
        console.log(data);
      });
  });
  const date = new Date(singleBlog.date_published);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDay();
  const formatted_date = `${day} ${month} ${year}`;
  console.log(month);
  function handleDelete(e) {
    e.preventDefault();
    axios.delete(url, singleBlog).then((response) => {
      console.log(response);
      router.push('/')
    });
  }
  return (
    <div>
      <Nav />
      <div className="container mx-auto my-5">
      <h2 className="text-[#0775C6] font-bold text-4xl">
        {singleBlog.blogTitle}
      </h2>
      <div clasName="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 w-[100px]">
            <Image src={avatar} className="" />
          </div>
          <div>
            <p className="font-bold">{singleBlog.author}</p>
          </div>
        </div>

        <div>
          <p>{formatted_date}</p>
        </div>
      </div>
      <div className="">
        <img
          src={`${imageUrl}${singleBlog.blogImage}`}
          className="w-[100%] h-[80vh]"
        />
      </div>
      <div>
        <p
          className="my-3"
          dangerouslySetInnerHTML={{ _html: `${singleBlog.blogpost}` }}
        ></p>
      </div>
      <div>
        <div className="flex items-center justify-center gap-5 my-4">
          <button onClick={(e)=>handleDelete(e)}>Delete</button>
          <button> Edit</button>

        </div>
        <h3 className="text-[#0775C6] text-center">Place your comment</h3>
        <textarea
          placeholder="Enter your comment"
          className="border-2 border-[#0775C6] rounded-lg shadow p-3"
        />
      </div>
    </div>
      <Footer />
    </div>
  );
}
export default SingleBlog;
