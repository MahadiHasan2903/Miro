import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { navbarItems } from "../assets/data/data";
import logo from "../assets/images/logo.png";

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
    <div className="flex justify-between items-center w-full border-b p-4 relative">
      {/* left header */}
      <div className="flex justify-start items-center w-1/2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div
          className="ml-12 flex gap-x-3 items-center"
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
        <div className="flex   gap-x-1  items-center justify-center">
          <TfiWorld />
          EN
        </div>
        <p>Contact Sales</p>
        <p>Login</p>
        <button className="bg-secondary font-light text-white px-5 py-2 rounded-full flex items-center gap-x-2">
          Sign up free <MdArrowRightAlt />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
