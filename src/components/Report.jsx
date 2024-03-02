import { MdArrowRightAlt } from "react-icons/md";
import section from "../assets/images/section.png";

const Report = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center w-full">
        <img src={section} alt="section" className="w-[80%]" />
      </div>
      <div className="absolute flex flex-col justify-center text-center -translate-y-[22rem] translate-x-[56rem]">
        <p className="text-primary text-[22px] font-bold">The Ways We Work</p>
        <p className="text-primary text-[18px] my-3 font-medium ">
          How has our relationship with work changed?
        </p>
        <div className="flex items-center justify-center">
          <button className="flex items-center px-5 py-2 font-light text-white rounded-full bg-secondary gap-x-2">
            View the report <MdArrowRightAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
