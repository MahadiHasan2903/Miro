import { MdOutlineExpandMore } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { navbarItems } from "../../assets/data/data";
import CustomButton from "../CustomButton";

const Navbar = ({ expandedItems, toggleExpand, closeExpandedItems }) => {
  return (
    <div className="items-center justify-between hidden w-full ml-12 lg:flex">
      <div
        className="flex items-center gap-x-2 xl:gap-x-3"
        onMouseLeave={closeExpandedItems}
      >
        {navbarItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`relative ${
                expandedItems === index ? "drop-shadow-md" : ""
              }`}
              onMouseEnter={() => toggleExpand(index)}
            >
              <p className="text-[16px] gap-x-2 font-medium text-primary flex items-center cursor-pointer">
                {item.title}
                {item.children && <MdOutlineExpandMore />}
              </p>
              {item.children && (
                <div
                  className={`p-3 ${
                    expandedItems === index ? "bg-primary" : "hidden"
                  } absolute`}
                >
                  {expandedItems === index && (
                    <ul className="w-[100px]">
                      {item.children.map((child, childIndex) => (
                        <li
                          key={childIndex}
                          className="py-2 text-white border-b border-white"
                        >
                          {child.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex font-medium  justify-between lg:gap-x-3 xl:gap-x-5 text-[16px] text-primary lg:ml-5 items-center">
        <div className="flex items-center justify-center cursor-pointer gap-x-1">
          <TfiWorld />
          EN
        </div>
        <p className="cursor-pointer">Contact Sales</p>
        <p className="cursor-pointer">Login</p>
        <CustomButton title="Sign up free" />
      </div>
    </div>
  );
};

export default Navbar;
