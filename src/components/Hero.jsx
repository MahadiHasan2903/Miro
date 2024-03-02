import { MdArrowRightAlt } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import headerImg from "../assets/images/headerimage.png";
import getApp from "../assets/images/getapp.png";

const Hero = () => {
  return (
    <div className="container flex items-center justify-between my-12">
      <div>
        <p className="text-[48px] font-bold text-primary">
          Take ideas from <br />
          better to best
        </p>
        <p className="text-[18px]  my-5 text-primary">
          Miro is your team&apos;s visual platform to connect, <br />
          collaborate, and create - together.
        </p>
        <input
          type="email"
          placeholder="Enter your work email"
          className=" border my-3 border-gray-500 bg-white placeholder-primary rounded-full px-4 py-2 w-[450px]"
        />
        <button className="bg-secondary my-3 font-light text-white px-[173px] py-2 rounded-full flex items-center gap-x-2">
          Sign up free <MdArrowRightAlt />
        </button>

        <p className="text-[14px]  font-light text-gray-600">
          Collaborate with your team within a minutes.
        </p>

        <div className="my-3 bg-[#f5f5f5] rounded-md  p-3 flex justify-center  items-center w-[400px]">
          <div className="flex flex-col items-start justify-center mr-10 ">
            <div className="flex items-center justify-center gap-x-1">
              <IoIosStar size={20} color="#FF9D48" />
              <IoIosStar size={20} color="#FF9D48" />
              <IoIosStar size={20} color="#FF9D48" />
              <IoIosStar size={20} color="#FF9D48" />
              <IoIosStarHalf size={20} color="#FF9D48" />
            </div>
            <p className="text-primary text-[11px] font-bold">
              Based on 5149+ reviews:
            </p>
          </div>
          <div className="flex items-center justify-center font-bold gap-x-4 text-primary">
            <img src={getApp} alt="getApp" />
            <p>GetApp</p>
            <p>Captcha</p>
          </div>
        </div>
      </div>
      <div>
        <img src={headerImg} alt="headerImg" />
      </div>
    </div>
  );
};

export default Hero;
