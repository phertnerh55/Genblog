import Image from "next/image";
import logo from "../../public/images/logo.svg";
function Nav() {
  return (
    <div className="container mx-auto flex justify-between items-center p-2">
      <div>
        <Image src={logo} width={100} height={100} />
      </div>
      <div>
        <ul className="flex  gap-5 items-center">
          <li>Home</li>
          <li>Featured Posts</li>
          <li>
            <button className="border-2 rounded-md px-10 text-center py-2 shadow text-[#0775C6] font-bold">Login</button>
          </li>
          <li>
            <button className="border-2  rounded-md px-10 text-center py-2 shadow bg-[#0775C6] text-[#ffff] font-bold">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
