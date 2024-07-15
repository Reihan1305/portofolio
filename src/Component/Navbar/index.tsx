import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "#Home" },
    { id: 2, text: "About Me", link: "#About" },
    { id: 3, text: "My Project", link: "#Services" },
    { id: 4, text: "Contact Me", link: "#ContactMe" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 mx-auto px-4 text-white rounded-b-3xl">
      <h1 className="w-1/2 text-3xl font-bold text-amber-400">
        <img src="/R.png" width={"50px"} />
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex w-full justify-end gap-0">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              className="px-5 py-2 hover:bg-amber-400 rounded-md cursor-pointer duration-300 hover:text-black active:bg-violet-700"
              href={item.link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-amber-400 m-4">
          <img src="/R.png" width={"50px"} />
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-amber-400 duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <a
              href={item.link}
             
              className="cursor-pointer"
              onClick={handleNav} // Close the menu on link click
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
