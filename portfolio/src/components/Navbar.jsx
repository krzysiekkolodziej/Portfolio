import { useState } from "react";

import styles from "../style";
import {navLinks} from "../constants"
import {navbar_toggle, close} from "../assets"

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return(
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <h1 className={`${styles.logo} ml-3 `}>
            Krzysztof Kolodziej
        </h1>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${active === nav.title ? "text-white" : "text-dimWhite"}`} onClick={() => setActive(nav.title)} 
                >
                    <a href={`#${nav.id}`}> {nav.title} </a>
                </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
                src={toggle ? close : navbar_toggle}
                alt="menu"
                className="w-[28px] h-[28px] mr-10  object-contain"
                onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-16 right-0 m-4 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>     
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </nav>
    );
};

export default Navbar;