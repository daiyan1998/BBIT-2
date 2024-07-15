import { Link, NavLink } from "react-router-dom";

// icon
import callIcon from "@/assets/homeImg/phone-call.png";
import { ImMenu } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";

import { useState, useRef } from "react";
import { Button } from "../ui/Button";

const navItems1 = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Products", link: "/products" },
];
const navItems2 = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Products", link: "/products" },
  { label: "Contact", link: "/contact" },
];

const Nav = () => {
  const hamMenu = useRef();
  const showNavbar = () => {
    hamMenu.current.classList.toggle("translate-x-[100%]");
  };
  return (
    <nav className="max-w-7xl flex mx-auto justify-between py-6 px-4 relative">
      <div className="flex items-center">
        <img src="vite.svg" alt="" />
        <h3 className="text-2xl">M/S Ocean</h3>
      </div>
      <ul className="md:flex hidden">
        {navItems1.map((item, index) => (
          <li key={index} className="px-4 py-2">
            <NavLink className="hover:text-primary text-xl" to={item.link}>
              {item.label}
            </NavLink>
          </li>
        ))}
        <Link to="contact" className="ml-10">
          <button className="relative h-10 w-32 origin-top transform rounded-lg border-2 border-primary text-lg text-white-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-primary cursor-pointer">
            Contact
          </button>
        </Link>
      </ul>
      <button className="md:hidden" onClick={showNavbar}>
        <ImMenu className="text-3xl" />
      </button>
      <div
        ref={hamMenu}
        className="fixed top-0 left-0 z-50 w-full translate-x-[100%] transition ease-linear 200ms"
      >
        <ul className=" bg-primary text-white text-center min-h-screen relative  flex items-center flex-col justify-center gap-5">
          {navItems2.map((item, index) => (
            <li key={index} onClick={showNavbar} className="px-4 py-2">
              <NavLink className="hover:text-primary text-2xl" to={item.link}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <IoCloseSharp
            onClick={showNavbar}
            className="absolute right-4 top-5 text-4xl"
          />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
