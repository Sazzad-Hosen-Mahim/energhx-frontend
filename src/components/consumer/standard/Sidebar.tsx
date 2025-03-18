import { FaHome } from "react-icons/fa";
import { MdHistory, MdSettings, MdLogout } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white text-[#758179] p-5 border-r border-gray-300 z-30">
      {/* Sidebar content */}
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      <ul className="space-y-4">
        <NavLink
          to="/consumer/dashboard"
          className={({ isActive }) =>
            `flex items-center space-x-2 cursor-pointer p-2 rounded ${
              isActive ? "bg-[#2DAD00] text-white" : "hover:bg-[#EAF7E6]" 
            }`
          }
        >
          <FaHome /> <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/consumer/buildingInformation"
          className={({ isActive }) =>
            `flex items-center space-x-2 cursor-pointer p-2 rounded ${
              isActive ? "bg-[#2DAD00] text-white" : "hover:bg-[#EAF7E6]"
            }`
          }
        >
          <BsBuilding /> <span>Building Information</span>
        </NavLink>

        <NavLink
          to="/consumer/certifiedAssociates"
          className={({ isActive }) =>
            `flex items-center space-x-2 cursor-pointer p-2 rounded ${
              isActive ? "bg-[#2DAD00] text-white" : "hover:bg-[#EAF7E6]"
            }`
          }
        >
          <IoPeople /> <span>Certified Associates</span>
        </NavLink>

        <NavLink
          to="/consumer/history"
          className={({ isActive }) =>
            `flex items-center space-x-2 cursor-pointer p-2 rounded ${
              isActive ? "bg-[#2DAD00] text-white" : "hover:bg-[#EAF7E6]"
            }`
          }
        >
          <MdHistory /> <span>History</span>
        </NavLink>

        <NavLink
          to="/consumer/settings"
          className={({ isActive }) =>
            `flex items-center space-x-2 cursor-pointer p-2 rounded ${
              isActive ? "bg-[#2DAD00] text-white" : "hover:bg-[#EAF7E6]"
            }`
          }
        >
          <MdSettings /> <span>Settings</span>
        </NavLink>

        <NavLink
          to="/logout"
          className="flex items-center space-x-2 cursor-pointer hover:bg-[#EAF7E6] p-2 rounded"
        >
          <MdLogout /> <span>Logout</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;