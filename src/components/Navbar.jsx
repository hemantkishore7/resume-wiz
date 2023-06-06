import { navLinks, buttons } from "../constants";
import { useState } from "react";
import { menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <h2 className=" text-white font-extrabold text-center text-2xl">
        Resume{" "}
        <span className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 bg-clip-text text-transparent">
          wiz
        </span>
      </h2>
      <ul className="list-none sm:flex hidden justify-between items-center">
        {navLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-poppins font-normal text-[16px] text-white ${
              idx === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <Link href={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <div className="sm:flex hidden">
        {buttons.map((button) => (
          <Link
            to={`/${button.href}`}
            key={button.id}
            type="button"
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ml-2 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500`}
          >
            {button.title}
          </Link>
        ))}
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-2xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-between items-center flex-1">
            {navLinks.map((nav, idx) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins font-normal text-[16px] text-white ${
                  idx === navLinks.length - 1 ? "mr-0" : "mb-4"
                } `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex">
            {buttons.map((button) => (
              <Link
                to={`/${button.href}`}
                key={button.id}
                type="button"
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ml-2 font-medium rounded-md text-sm text-center px-2   
                m-auto 
                h-[24px] w-[48pxpx]  mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500`}
              >
                {button.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
