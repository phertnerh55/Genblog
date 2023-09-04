import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineCopyrightCircle} from "react-icons/ai";
function Footer() {
  return (
    <div className="">
    <div className="container mx-auto">
      <h3 className="font-bold text-center text-2xl">
        JOIN OUR COMMUNITY OF OVER{" "}
        <span className="text-[#0775C6] mb-5">200,000</span> BLOGGERS
      </h3>
      
      <div className=" my-5 shadow-[0_0_5px_lightgray]  w-[60%] mx-auto flex justify-between">
        <input placeholder="Email Address" type="email" className="p-4 outline-0" />
        <button className="text-white bg-[#0775C6] p-4">Subscribe</button>
      </div>
      <div className="flex justify-between my-7">
        <div>
          <div className="flex justify-center">
          <Image src={logo} className="mb-3 w-[200px]"  />
          </div>
          <p className="text-center mb-3">Follow Us On:</p>
          <div className="flex justify-center gap-4 mb-3">
            <FaFacebookF  size={40}/>
            <FaLinkedinIn size={40}/>
            <BsTwitter size={40}/>
            <FaInstagram size={40}/>
          </div>
        </div>
        <div>
          <h3 className="text-[#0775C6] mb-5">Quick Links</h3>
          <ul>
            <li className="mb-4"> About blog</li>
            <li className="mb-4">News Letter</li>
            <li className="mb-4">Contact Us</li>
            <li className="mb-4">Podcasts</li>
            <li className="mb-4">Careers</li>
            <li className="mb-4">Write for Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#0775C6] mb-5">Top Articles</h3>
          <ul>
            <li className="mb-4"> How to start a blog</li>
            <li className="mb-4">How to create a great blog content</li>
            <li className="mb-4">
              Contact Us How to find readers for your blog
            </li>
            <li className="mb-4">PodcastsStrategies to build a community</li>
            <li className="mb-4">How to create money blogging</li>
            <li className="mb-4">Ways to make blogging life easier</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-[#D9D9D9] flex justify-center items-center gap-4 p-4">
        <p className="flex items-center gap-1">Copyright <AiOutlineCopyrightCircle/> 2023</p>
        <p>genblog.com</p>
        <p>. All rights reserved</p>

    </div>
    </div>
  );
}
export default Footer;
