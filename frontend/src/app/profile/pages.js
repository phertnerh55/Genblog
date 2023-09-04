"use client";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import avatar from "../../../public/images/avatar.png";
import Image from "next/image";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { StateContext } from "@/context/state";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";

function Profile() {
  const { isLogin, setIsLogin } = useContext(StateContext);
  const [blogs, setBlogs] = useState([]);
  const url = "http://127.0.0.1:8000/api/blogs/";
  let imageUrl = "http://127.0.0.1:8000/api";
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  console.log(blogs);
  blogs.forEach((blog) => {
    if (blog.author === isLogin.username) {
      myBlogs.push(blog);
    }
    console.log(myBlogs);
  });

  return (
    <div>
      <Nav />
      <div className="">
        {/* <div className="w-[90%] mx-auto border-2 border-[#54acea] shadow-lg rounded-lg p-4 my-[3em] "> */}
        <div className="container mx-auto p-4 my-[3em] ">
          <div className="flex items-center justify-start gap-3  my-3 ">
            <div className=" w-[80px] h-[80px] rounded-[50%] flex items-center bg-black ">
              <Image src={avatar} className="w-[100%] h-[100%]" />
            </div>
            <div>
              <h2 className="text-[#0775C6] text-2xl font-bold">
                {isLogin.username}
              </h2>
              <h2 className=" text-gray-500">
                {isLogin.email}
              </h2>
            </div>
          </div>
          <div className="underline"></div>
          <div className=" flex gap-10">
            <div className="flex-1">
              <h2 className="text-[#0775C6] text-ce text-3xl font-bold mb-3">Bio</h2>
              <p>
                Rafsa here,A Social Media Influencer/Software Engineer. By day,
                I am a Software Engineer, by night, I’m a Social Media
                Influencer. Join me on my journey as I try changing my
                community.Together, Let’s inspire, educate, and connect!”
              </p>
              <div className="flex items-center gap-4 my-3">
                <FaFacebookF size={40} />
                <BsTwitter size={40} />
                <FaEnvelope size={40} />
              </div>
            </div>
            <div className="flex-1 ">
              <h2 className="text-[#0775C6] text-3xl font-bold mb-3">
                My Blogs
              </h2>
              <div>
              {myBlogs.map((blog) => {
                return (
                  <Link href={`/profile/blogs/${blog.id}`}>
                    <div>
                      <div className="w-[100%] mb-5 flex items-start justify-start gap-2">
                        <div className="w-[20%] h-[10vh] rounded-lg">
                          <img
                            src={`${imageUrl}${blog.blogImage}`}
                            className="w-[100%] h-[100%] rounded-lg"
                          />
                        </div>
                        <div className="w-80%">
                          <h1 className="text-black font-bold ">
                            {blog.blogTitle}
                          </h1>
                          <p
                            className="my-3"
                            dangerouslySetInnerHTML={{
                              __html: `${blog.blogPost.substr(0,300)}...`,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              </div>
              <p className="text-[#0775C6] text-2xl  my-3 text-end">
                All Blogs
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
