import React, { useState } from "react";
import { navLinks } from "../constants";
import { navbar_toggle, close, logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sticky top-0 overflow-hidden z-[1]">
      <div className="w-full flex flex-row my-5 justify-between items-center">
        <a href="#home">
          <img src={logo} alt="logo" className="w-[124px] h-[64px] m-1" />
        </a>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
                active === nav.title ? "gradient" : "dimGradient"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}
        </ul>
        <img
          src={toggle ? close : navbar_toggle}
          alt="menu"
          className="w-[28px] h-[28px] mr-10 sm:hidden object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <div className="w-full sm:hidden flex flex-col items-end text-right dropDownNav">
        <div
          className={`${!toggle ? "hidden" : "flex"} ${
            !toggle ? "" : "dropDownNav"
          } w-full flex-col`}
        >
          <ul className="mr-10">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] mb-5 ${
                  active === nav.title ? "gradient" : "dimGradient"
                } `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                <hr
                  className={`my-5 -mr-10 ${
                    index === navLinks.length - 1 ? "hidden" : "visible"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
