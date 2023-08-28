import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
function Nav() {
  return (
    <div className="container mx-auto flex justify-between items-center p-2">
     < Link href={'/'}>  <div className="cursor-pointer">
        <Image src={logo} width={100} height={100} />
      </div></Link>
      <div>
        <ul className="flex  gap-5 items-center">
        < Link href={'/'}> <li className="cursor-pointer">Home</li></Link>
        < Link href={'/newblog'}> <li className="cursor-pointer">Write a blog</li></Link>
        < Link href={'/login'}> <li>
            <button className="border-2 rounded-md px-10 text-center py-2 shadow text-[#0775C6] font-bold">Login</button>
          </li></Link>
          < Link href={'/signup'}> <li>
            <button className="border-2  rounded-md px-10 text-center py-2 shadow bg-[#0775C6] text-[#ffff] font-bold">Sign Up</button>
          </li></Link>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
