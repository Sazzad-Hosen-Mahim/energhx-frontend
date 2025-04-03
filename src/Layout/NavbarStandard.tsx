import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/logo.svg"; // Adjust the path to your logo
import { User } from "./Navbar";

interface NavbarStandardProps {
  user: User;
}

const NavbarStandard = ({ user }: NavbarStandardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center mx-16">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="h-8" />
          <span className="font-semibold">{user.name}</span>
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
            "Consulting",
            "Research",
            "EnerghxPlus",
            "Contact Us",
          ].map((label) => (
            <li key={label} className="md:ml-4 my-2 md:my-0">
              <NavLink
                to={`/${label.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative px-4 py-2 block md:inline group hover:text-primary 
          ${isActive ? "text-primary-green font-bold" : "text-primary-gray/80"}`
                }
              >
                {label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
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
