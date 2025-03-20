import { SidebarProps } from "@/types";
import { NavLink } from "react-router-dom";



const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <div className="w-64 h-screen bg-white text-[#758179] p-5 border-r border-gray-300 z-30">
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 cursor-pointer p-2 rounded ${
                isActive ? "bg-[#2DAD00] text-white" : "hover:bg-[#EAF7E6]"
              }`
            }
          >
            <item.icon /> <span>{item.label}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
