import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import "../index.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="shadow-lg w-full sticky z-50 top-0 left-0">
            <div className="md:flex items-center justify-between bg-gray-100 py-2 px-4">
                <Logo />

                <div className="w-full flex justify-end" onClick={toggleMenu}>
                    {isOpen ? (
                        <IoMdClose className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden" />
                    ) : (
                        <IoMdMenu className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden" />
                    )}

                    <ul
                        className={`md:flex md:items-center md:justify-end pb-8 md:pb-0 absolute md:static bg-gray-100 md:z-auto left-0 w-full md:w-2/3 md:pl-0 pl-9 transition-all duration-1000 ease-in-out ${
                            isOpen
                                ? "top-[55px] sm:top-[70px] opacity-100"
                                : "top-[-400px]"
                        } md:opacity-100 opacity-0`}
                    >
                        {
                            <>
                                <li className="py-2 px-2 my-2 md:my-0 w-full 2xl:w-1/6">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-pink-600 text-center block"
                                                : "hover:text-links-hover text-base block text-center duration-400 ease-in-out"
                                        }
                                        to={"/"}
                                    >
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="py-2 px-2 my-2 md:my-0 w-full 2xl:w-1/6">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-pink-600 text-center block"
                                                : "hover:text-links-hover text-base block text-center duration-400 ease-in-out"
                                        }
                                        to={"/category/1"}
                                    >
                                        Electronics
                                    </NavLink>
                                </li>
                                <li className="py-2 px-2 my-2 md:my-0 w-full 2xl:w-1/6">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-pink-600 text-center block"
                                                : "hover:text-links-hover text-base block text-center duration-400 ease-in-out"
                                        }
                                        to={"/category/2"}
                                    >
                                        Jewelery
                                    </NavLink>
                                </li>
                                <li className="py-2 px-2 my-2 md:my-0 w-full 2xl:w-1/6">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-pink-600 text-center block"
                                                : "hover:text-links-hover text-base block text-center duration-400 ease-in-out"
                                        }
                                        to={"/category/3"}
                                    >
                                        Women's clothing
                                    </NavLink>
                                </li>
                                <li className="py-2 px-2 my-2 md:my-0 w-full 2xl:w-1/6">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-pink-600 text-center block"
                                                : "hover:text-links-hover text-base block text-center duration-400 ease-in-out"
                                        }
                                        to={"/category/4"}
                                    >
                                        Men's clothing
                                    </NavLink>
                                </li>
                            </>
                        }

                        <CartWidget />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
