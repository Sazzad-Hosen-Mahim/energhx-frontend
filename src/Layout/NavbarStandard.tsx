import { useState } from "react";
import { NavLink } from "react-router-dom";
import { User } from "./Navbar";
import Logo from "@/assets/logo.svg"; // Adjust the path to your logo

interface NavbarStandardProps {
  user: User;
}

const NavbarStandard = ({ user }: NavbarStandardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center mx-16  ">
        <div className="logo">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-primary-gray text-2xl"
        >
          {isOpen ? "✖️" : "☰"}
        </button>

        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-green-500 md:bg-transparent flex flex-col md:flex-row md:items-center transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          {[
            "Home",
            "About Us",
            "Internship",
            "Incentives",
            "Partners",
            "Services",
            "EnerghxPlus",
            "Contact Us",
          ].map((label) => (
            <li key={label} className="md:ml-4 my-2 md:my-0">
              <NavLink
                to={`/${label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-2 block md:inline ${
                    isActive
                      ? "text-primary-green font-bold"
                      : "text-primary-gray/80"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="w-full text-gray-400 opacity-40" />
    </>
  );
};

export default NavbarStandard;
