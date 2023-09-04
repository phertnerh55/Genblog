"use client";
import Image from "next/image";
import profile from "../../../public/images/profile.png";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import { useState, useContext } from "react";
import axios from "axios";
import { StateContext } from "@/context/state";
import { useRouter } from "next/navigation";

function SignUp() {
  const { isSignUp, setIsSignUp } = useContext(StateContext);
  const signupUrl = "http://127.0.0.1:8000/api/user/create/";
  const [userData, setUserData] = useState({});
  const router=useRouter()
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  function handleLogin(e) {
    e.preventDefault();
    console.log(userData);
    axios
      .post(signupUrl, {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        console.log(response);
      });
      router.push('/login')
  }
  return (
    <div>
      <Nav />
      <div className="bg-[#0775C6] h-[100vh] mt-[10vh]">
        <h1 className="text-white text-center font-bold text-3xl ">
          CREATE YOUR ACCOUNT
        </h1>
        <div className="w-[50%] bg-white mx-auto p-4 rounded-3xl my-[6em] ">
          <div className="flex justify-center items-center mt-[-6em]">
            <Image
              src={profile}
              width={150}
              height={150}
              className="rounded-[50%] bg-gray-300"
            />
          </div>
          <div>
            <div className=" shadow border-gray-300  border-2 w-[70%] rounded mx-auto mt-5">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                className="outline-0 p-5 bg-transparent w-[100%] "
                placeholder="Username"
                name="username"
              />
            </div>
            <div className=" shadow border-gray-300  border-2 w-[70%] rounded mx-auto mt-5">
              <input
                onChange={(e) => handleChange(e)}
                type="email"
                className="outline-0 p-5 bg-transparent w-[100%] "
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className=" shadow border-gray-300  border-2 w-[70%] rounded mx-auto my-5">
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                className="outline-0 p-5 bg-transparent w-[100%] "
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="flex justify-center mb-10 mt-9">
              <button
                onClick={(e) => handleLogin(e)}
                className=" p-4   shadow font-bold text-center text-2xl w-[70%] mx-auto text-white bg-[#0775C6] rounded "
              >
                SignUP
              </button>
            </div>
            <p className="text-center my-5">
              Have an account? <span className="text-[#0775C6]">Login</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SignUp;
