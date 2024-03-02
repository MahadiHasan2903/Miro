import { MdArrowRightAlt } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ title }) => {
  return (
    <div className="flex items-center justify-center ">
      <button className="flex items-center px-5 py-2 font-light text-white transition border rounded-full hover:bg-white border-secondary bg-secondary hover:text-secondary gap-x-2">
        {title} <MdArrowRightAlt />
      </button>
    </div>
  );
};

export default CustomButton;
