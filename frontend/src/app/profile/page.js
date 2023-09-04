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
    <div className="flex flex-col h-[100vh]">
      <Nav className="flex-1"/>
      <div className="container mx-auto flex gap-[6em] mt-[10vh] p-2 mb-[2em] flex-1">
        <div className="shadow-[0_0_5px_lightgray] rounded-lg p-2 ">
          <div className="flex justify-center ">
            <div className=" w-[150px] h-[150px] rounded-[50%] ">
              <Image src={avatar} className="w-[100%] h-[100%]" />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-[#0775C6] text-2xl font-bold">
              {isLogin.username}
            </h2>
            <h2 className=" text-gray-500">{isLogin.email}</h2>
          </div>
          <div className="flex justify-center gap-4 my-3 ">
            <FaFacebookF size={30} color="#0775C6" />
            <BsTwitter size={30} color="#0775C6" />
            <FaEnvelope size={30} color="#0775C6" />
          </div>
        </div>
        <div>
          <div className="mb-[1em]">
            <h2 className="text-black text-ce text-3xl font-bold mb-3">
              About Me
            </h2>
            <p>
              {isLogin.username} here,A Social Media Influencer/Software
              Engineer. By day, I am a Software Engineer, by night, I’m a Social
              Media Influencer. Join me on my journey as I try changing my
              community.Together, Let’s inspire, educate, and connect!” here,A
              Social Media Influencer/Software Engineer. By day, I am a Software
              Engineer, by night, I’m a Social Media Influencer. Join me on my
              journey as I try changing my community.Together, Let’s inspire,
              educate, and connect!”
            </p>
          </div>

          <div>
            {/* {(myBlogs):()} */}

            <h2 className="text-3xl font-bold mb-3">My BLogs</h2>
            <div className="flex gap-4">
              {myBlogs.map((blog) => {
                return (
                  <div className="w-[20%] shadow-[0_0_5px_lightgray] rounded-lg">
                    <Link href={`/profile/blogs/${blog.id}`}>
                      <div className="">
                        <div className="h-[20vh]">
                          <img
                            src={`${imageUrl}${blog.blogImage}`}
                            className="rounded-lg w-[100%] h-[100%]"
                          />
                        </div>
                        <div className="p-3">
                          <h1 className="text-black font-bold ">
                            {`${blog.blogTitle.substr(0, 25)}...`}
                          </h1>
                          <p
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: `${blog.blogPost.substr(0, 300)}...`,
                            }}
                          ></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer className="flex-1" />
    </div>
  );
}
export default Profile;
