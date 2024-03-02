import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { navbarItems } from "../assets/data/data";
import logo from "../assets/images/logo.png";
import CustomButton from "./CustomButton";

const Navbar = () => {
  // State to track the index of the expanded item
  const [expandedItems, setExpandedItems] = useState(null);

  // Function to toggle the expansion of an item based on its index
  const toggleExpand = (index) => {
    setExpandedItems((prevExpandedItem) => {
      return prevExpandedItem === index ? null : index;
    });
  };

  // Function to close all expanded items
  const closeExpandedItems = () => {
    setExpandedItems(null);
  };

  return (
    <div className="relative flex items-center justify-between w-full px-[150px] py-4 border-b">
      {/* left header */}
      <div className="flex items-center justify-start w-1/2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div
          className="flex items-center ml-12 gap-x-3"
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
                          <li key={childIndex} className="text-white">
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
      </div>

      {/* right header */}
      <div className="flex font-medium  justify-between gap-x-5 text-[16px] text-primary items-center">
        <div className="flex items-center justify-center gap-x-1">
          <TfiWorld />
          EN
        </div>
        <p>Contact Sales</p>
        <p>Login</p>
        <CustomButton title="Sign up free" />
      </div>
    </div>
  );
};

export default Navbar;
