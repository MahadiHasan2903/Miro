import { MdOutlineExpandMore } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { navbarItems } from "../../assets/data/data";
import CustomButton from "../CustomButton";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/images/logo.png";

const MobileNavbar = ({
  expandedItems,
  toggleExpand,
  isMenuOpen,
  toggleMenu,
  closeMenu,
}) => {
  return (
    <div className="flex justify-end lg:hidden">
      <CgMenuRightAlt
        size={30}
        className="transition-all cursor-pointer text-primary hover:text-secondary"
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 w-[300px] h-[100vh] popup  transition-all flex flex-col items-start px-5"
          style={{ width: isMenuOpen ? "300px" : "0" }}
        >
          <div className="flex items-center justify-between mt-5">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div
              className="absolute cursor-pointer right-5"
              onClick={closeMenu}
            >
              <RxCross1 size={25} />
            </div>
          </div>
          <div className="mt-12">
            {navbarItems.map((item, index) => (
              <Link to={item.to} key={index}>
                <div
                  className={`relative  ${
                    expandedItems === index ? "drop-shadow-md" : ""
                  }`}
                  onMouseEnter={() => toggleExpand(index)}
                >
                  <p className="text-[16px]  border-b py-1 border-primary my-5 gap-x-2 font-medium text-primary flex items-center cursor-pointer">
                    {item.title}
                    {item.children && <MdOutlineExpandMore />}
                  </p>
                  {item.children && (
                    <div
                      className={`p-3 ml-[100px] mt-[-40px] ${
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

          <div className="mt-[300px]">
            <div className="flex flex-col font-medium  items-start gap-y-5 text-[16px] text-primary ">
              <div className="flex items-center">
                <div className="flex items-center justify-center mr-10 cursor-pointer gap-x-1">
                  <TfiWorld />
                  EN
                </div>
                <p className="cursor-pointer">Contact Sales</p>
              </div>
              <div className="flex items-center">
                <p className="mr-10 cursor-pointer">Login</p>
                <CustomButton title="Sign up free" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
