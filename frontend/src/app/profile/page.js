'use client'
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import avatar from "../../../public/images/avatar.png";
import Image from "next/image";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Profile() {
  return (
    <div>
      <Nav />
      <div className="w-[90%] mx-auto border-2 border-[#54acea] shadow-lg rounded-lg p-5">
        <div className="flex items-center justify-start gap-3  my-3 ">
          <div className=" w-[100px] h-[100px] rounded-[50%] flex items-center bg-black ">
            <Image src={avatar} className="w-[100%] h-[100%]" />
          </div>
          <h2 className="text-[#0775C6] text-4xl font-bold">{localStorage.getItem('username')}</h2>
        </div>
        <div className="underline"></div>
        <div className=" flex gap-10">
          <div className="flex-1">
            <h2 className="text-[#0775C6] text-3xl font-bold mb-3">Bio</h2>
            <p>
              Rafsa here,A Social Media Influencer/Software Engineer. By day, I
              am a Software Engineer, by night, I’m a Social Media Influencer.
              Join me on my journey as I try changing my community.Together,
              Let’s inspire, educate, and connect!”
            </p>
            <div className="flex items-center gap-4 my-3">
              <FaFacebookF size={40} />
              <BsTwitter size={40} />
              <FaEnvelope size={40} />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[#0775C6] text-3xl font-bold mb-3">My Blogs</h2>
            <div>
              <div className="w-[100%] mb-5 flex items-start justify-start gap-2">
                <div className="w-[20%] h-[10vh] bg-black">
                  <Image src={avatar} className="w-[100%] h-[100%]" />
                </div>
                <div className="w-80%">
                  <h1 className="text-black font-bold ">
                    Lorem Ipsum es simplemente...
                  </h1>
                  <p className="mb-3">
                    Lorem Ipsum es simplemente el texto de relleno de
                    las...Lorem Ipsum es simplemente el texto de relleno de
                    las...
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[#0775C6] text-2xl  my-3 text-end">All Blogs</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
