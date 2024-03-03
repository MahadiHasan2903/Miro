import section from "../assets/images/section.png";
import CustomButton from "./CustomButton";

const Report = () => {
  return (
    <div className="container">
      <div className="relative flex items-center justify-center w-full">
        <img src={section} alt="section" className="w-auto lg:w-[90%]" />
      </div>
      <div className="hidden absolute lg:flex flex-col justify-center text-center -translate-y-[25rem] translate-x-[62rem]">
        <p className="text-primary text-[22px] font-bold">The Ways We Work</p>
        <p className="text-primary text-[18px] my-3 font-medium ">
          How has our relationship with work changed?
        </p>
        <div className="flex items-center justify-center">
          <CustomButton title="View the report" />
        </div>
      </div>
    </div>
  );
};

export default Report;
