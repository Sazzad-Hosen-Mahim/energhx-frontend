import { useState } from "react";
import { Link } from "react-router-dom";
import userImg from "/user.png";
import { User } from "./Navbar";
import Logo from "@/assets/logo.svg";

interface NavbarAdminProps {
  user: User;
}

const NavbarAdmin = ({ user }: NavbarAdminProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b p-4 flex justify-center items-center">
      <div className="w-[1440px] flex justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8 w-[120px]" />
        </Link>

        <div className="flex items-center space-x-7">
          <button className="relative p-2 w-[40px] h-[40px] rounded-full bg-[#EAF7E6]">
            🔔
          </button>

          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <img
                src={user.profileImg || userImg}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
