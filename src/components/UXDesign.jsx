import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react";
import { uxDesignButtons, uxTools } from "../assets/data/data";
import uxDesign from "../assets/images/uxdesign.png";
import { IoMdCheckmark } from "react-icons/io";

const UXDesign = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  // function for active button
  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <div className="container mt-[100px] lg:mt-12">
      <p className="text-[40px] lg:text-[48px] font-bold text-primary">
        Built for all kinds of teams
      </p>
      <div className="flex flex-col items-center justify-start my-10 md:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-5">
        {/* Showing buttons dynamically */}
        {uxDesignButtons.map((button, index) => (
          <button
            key={index}
            className={`flex items-center px-5 py-2 border rounded-full ${
              index === activeButtonIndex
                ? "border-[#F1F3FD] bg-[#F1F3FD]"
                : "border-gray-150"
            } text-[14px] text-primary transition-all hover:bg-[#F1F3FD]`}
            onClick={() => handleButtonClick(index)}
          >
            {button.name}
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row flex-col items-start justify-between mt-[100px] gap-x-12">
        <div className="w-full lg:w-1/3 text-[18px]">
          <p className="font-bold text-primary">
            {/* Showing active buttons title dynamically */}
            {uxDesignButtons[activeButtonIndex].name}
          </p>
          <div className="mt-8 text-primary opacity-60 ">
            <p className="flex items-center gap-x-5">
              <IoMdCheckmark />
              Build low-fi wireframes
            </p>
            <p className="flex items-center gap-x-5">
              <IoMdCheckmark /> Involve stackholders in the design process
            </p>
            <p className="flex items-center gap-x-5">
              <IoMdCheckmark /> Run engaging design workshops
            </p>
          </div>
          <p className=" text-secondary text-[18px] underline flex items-center justify-start mt-10 gap-x-2">
            Learn More <MdArrowRightAlt />
          </p>

          <div className="mt-12">
            <p className="text-[18px] my-2 text-primary opacity-60">
              Integrate your favorite tools.
            </p>
            <div className="flex items-center justify-start gap-x-8">
              {uxTools.map((tools, index) => (
                <img key={index} src={tools.image} alt={tools.name} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full mt-10 lg:mt-0">
          <img
            src={uxDesign}
            alt="brainstorming"
            className="w-[800px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default UXDesign;
