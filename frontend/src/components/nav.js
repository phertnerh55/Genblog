"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import { useState, useContext } from "react";
import { StateContext } from "@/context/state";

function Nav() {
  const { isLogin, setIsLogin } = useContext(StateContext);
  if(isLogin.is_loggedin){
    isLogin.username=localStorage.getItem("username")
    isLogin.email=localStorage.getItem("email")
  }
  
  return (
    <div className="bg-white fixed top-0 right-0 left-0 h-[10vh]">
    <div className="container mx-auto flex justify-between items-center py-2">
      <Link href={"/"}>
        {" "}
        <div className="cursor-pointer">
          <Image src={logo} width={100} height={100} />
        </div>
      </Link>
      <div className="flex  gap-5 items-center">
        <ul className="flex  gap-5 items-center">
          <Link href={"/"}>
            {" "}
            <li className="cursor-pointer">Home</li>
          </Link>
        </ul>
        {isLogin.is_loggedin ? (
          <div className="flex  gap-5 items-center">
            <Link href={"/newblog"}>
              {" "}
              <p className="cursor-pointer">Write A Blog</p>
            </Link>
            <Link href={"/profile"}> <p>My Profile</p></Link>
            <Link href={"/logout"}><button className="border-2 rounded-md px-10 text-center py-2 shadow text-[#0775C6] font-bold">
              Logout
            </button></Link>
          </div>
        ) : (
          <div className="flex  gap-5 items-center">
            <Link href={"/login"}>
              {" "}
              <p className="cursor-pointer">Write A Blog</p>
            </Link>
            <Link href={"/login"}>
              <button className="border-2 rounded-md px-10 text-center py-2 shadow text-[#0775C6] font-bold">
                Login
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="border-2  rounded-md px-10 text-center py-2 shadow bg-[#0775C6] text-[#ffff] font-bold">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
export default Nav;
