import Image from "next/image";
import profile from "../../../public/images/profile.png";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
function Login() {
  return (
    <div>
      <Nav />
      <div className="bg-[#0775C6] h-[80vh]">
        <h1 className="text-white text-center font-bold text-3xl ">
          LOGIN TO YOUR ACCOUNT
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
                type="text"
                className="outline-0 p-5 bg-transparent w-[100%] "
                placeholder="Email Address"
              />
            </div>
            <div className=" shadow border-gray-300  border-2 w-[70%] rounded mx-auto my-5">
              <input
                type="password"
                className="outline-0 p-5 bg-transparent w-[100%] "
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center mb-10 mt-9">
              <button className=" p-4   shadow font-bold text-center text-2xl w-[70%] mx-auto text-white bg-[#0775C6] rounded ">
                Log in
              </button>
            </div>
            <div className="flex justify-between mx-auto w-[70%] my-5">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className=" w-7 h-7 shadow border-gray-300  border-2 outline-0"
                />
                <p>Remember Me</p>
              </div>
              <p className="text-[#0775C6] mb-5">Forgot password?</p>
            </div>
            <p className="text-center my-5">
              Don’t have an account?{" "}
              <span className="text-[#0775C6]">Signup</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
