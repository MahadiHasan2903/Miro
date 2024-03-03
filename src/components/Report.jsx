import section from "../assets/images/section.png";
import CustomButton from "./CustomButton";

const Report = () => {
  return (
    <div className="container">
      <div className="relative flex items-center justify-center w-full">
        <img src={section} alt="section" className="w-auto lg:w-[90%]" />
      </div>
      <div className="hidden xl:-translate-y-[18rem] xl:translate-x-[38rem] md:-translate-y-[12rem] md:translate-x-[22rem] absolute sm:-translate-y-[10.5rem] sm:translate-x-[18rem] sm:flex flex-col justify-center text-center lg:-translate-y-[15rem] lg:translate-x-[28rem]">
        <p className="text-primary text-[16px]  lg:text-[20px] font-bold">
          The Ways We Work
        </p>
        <p className="text-primary text-[10px] lg:text-[16px] my-3 font-medium ">
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
