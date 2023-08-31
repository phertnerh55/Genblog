"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/nav";
import Link from "next/link";
import { StateContext } from "@/context/state";
import { useContext } from "react";
import { useRouter } from "next/navigation";

function LogOut() {
  const router = useRouter();
  const { isLogin, setIsLogin } = useContext(StateContext);

  function handleLogOut() {
    localStorage.clear();
    setIsLogin({
      is_loggedin: false,
      username: "",
      email: "",
    });
    router.push("/");
  }
  function handleCancel() {
    localStorage.clear();
    setIsLogin({
      is_loggedin: false,
      username: "",
      email: "",
    });
    router.push("/");
  }

  return (
    <div className="flex h-[100vh] flex-col">
      <Nav className="flex-1" />
      <div className="bg-[#0775C6]">
        <div className="flex-1 justify-center items-center my-3">
          <h1 className="text-black font-bold text-4xl text-center my-3">
            Do You Want To LogOut?
          </h1>
          <div className="flex gap-5 justify-center items-center my-3">
            <button
              onClick={handleCancel}
              className="border-2 rounded-md px-10 text-center py-2 shadow text-[#0775C6] font-bold"
            >
              Cancel
            </button>

            <button
              onClick={handleLogOut}
              className="border-2 rounded-md px-10 text-center py-2 shadow text-[#0775C6] font-bold"
            >
              LogOut
            </button>
          </div>
        </div>
      </div>

      <Footer className="flex-1" />
    </div>
  );
}
export default LogOut;
