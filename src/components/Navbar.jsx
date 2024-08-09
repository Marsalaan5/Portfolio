
import React, { useState } from "react";
import pic from "../assets/pic.jpg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center space-x-4">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Mohammad Rashid
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:text-green-500 hover:underline duration-200 cursor-pointer"
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                className="focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="bg-white md:hidden">
          <ul className="flex flex-col h-screen items-center justify-center space-y-6 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:text-green-500 hover:underline duration-200 cursor-pointer"
              >
                <Link
                  onClick={() => setMenu(false)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

