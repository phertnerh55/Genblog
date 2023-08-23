import Image from "next/image";
import avatar from "../../public/images/avatar.png";
function HeroSingle() {
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-[#0775C6] font-bold text-4xl">
        Things You Should Do To Improve Typing Skills
      </h2>
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 w-[100px]">
            <Image src={avatar} className="" />
          </div>
          <div>
            <p className="font-bold">Phertnerh Abdul</p>
          </div>
        </div>

        <div>
          <p>20th July 2023</p>
        </div>
      </div>
      <div className="hero"></div>
      <div>
        <p className="my-3">
          Regardless of what career you choose, you’ll likely need to know how
          to type. According to Herzing University, the average individual types
          about 40 words per minute. However, this is significantly less than
          individuals trained to use the touch- type method who can typically
          expect to type 75 words per minute or more. It’s easy to imagine all
          the benefits of faster typing, such as writing up memos and documents
          quicker, saving time in your work and personal life, making it easier
          to take notes during a meeting, and even having a marketable skill.
          Specific jobs, such as transcription and office work, may have, or
          expect, a certain typing speed from their employees, so increasing
          your typing speed can be a marketable skill set to help you get ahead
          in many ways.

        </p>
      </div>
      <div>
      <h3 className="text-[#0775C6] text-center">
        Place your comment
      </h3>
    < textarea placeholder="Enter your comment" className="border-2 border-[#0775C6] rounded-lg shadow p-3"  />
      </div>
    </div>
  );
}

export default HeroSingle;
