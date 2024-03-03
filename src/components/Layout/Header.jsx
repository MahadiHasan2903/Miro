import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  // State to track the index of the expanded item
  const [expandedItems, setExpandedItems] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //function to open mobile navbar
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  //function to close mobile navbar
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
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
    <div className="sticky top-0 bg-white z-[9999]">
      <div className="relative flex items-center justify-between xl:justify-start w-full px-10 xl:px-[150px] py-4 border-b ">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <Navbar
          expandedItems={expandedItems}
          toggleExpand={toggleExpand}
          closeExpandedItems={closeExpandedItems}
        />

        {/* Mobile Navbar */}
        <MobileNavbar
          expandedItems={expandedItems}
          toggleExpand={toggleExpand}
          closeExpandedItems={closeExpandedItems}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      </div>
    </div>
  );
};

export default Header;
