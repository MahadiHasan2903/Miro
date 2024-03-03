import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react"; // Import useState
import { brainstormingButtons } from "../assets/data/data";
import brainstorming from "../assets/images/Brainstorm.png";

const Brainstorm = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  // function for active button
  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <div className="container mt-[100px] lg:mt-12">
      <p className=" text-[30px] lg:text-[48px] font-bold text-primary">
        Built for the way you work
      </p>
      <div className="flex flex-col items-center justify-start my-10 lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-5">
        {/* Showing buttons dynamically */}
        {brainstormingButtons.map((button, index) => (
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
            {brainstormingButtons[activeButtonIndex].name}
          </p>
          <p className="mt-8 ">
            {brainstormingButtons[activeButtonIndex].description}
          </p>
          <p className=" text-secondary text-[18px] underline flex items-center justify-start mt-10 gap-x-2">
            Learn More <MdArrowRightAlt />
          </p>
        </div>
        <div className="flex justify-end w-full">
          <img
            src={brainstorming}
            alt="brainstorming"
            className="w-[800px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Brainstorm;
