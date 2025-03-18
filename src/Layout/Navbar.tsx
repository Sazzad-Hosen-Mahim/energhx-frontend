import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-website-color-green  p-4 flex justify-between items-center">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-website-color-green md:bg-transparent flex flex-col md:flex-row md:items-center transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/internship", label: "Internship" },
            { to: "/incentives", label: "Incentives" },
            { to: "/partners", label: "Partners" },
            { to: "/services", label: "Services" },
            { to: "/energhxplus", label: "EnerghxPlus" },
            { to: "/contact", label: "Contact Us" },
          ].map((link) => (
            <li key={link.to} className="md:ml-4 my-2 md:my-0">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `nav-link px-4 py-2 block md:inline ${
                    isActive ? "text-yellow-400 font-bold" : "text-primary-gray"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="w-full text-primary-gray  opacity-40" />
    </>
  );
};

export default Navbar;
