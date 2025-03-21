import { SidebarProps } from "@/types";
import { NavLink } from "react-router-dom";



const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <div className=" h-screen text-[#758179] border-r border-t border-r-[#E7E9E8] border-t-[#E7E9E8]  border-gray-300 z-30">
      {/* <h2 className="text-xl font-semibold mb-5">Dashboard</h2> */}
      <ul className="">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 cursor-pointer text-[18px] p-3 pr-28 rounded-sm ${
                isActive ? "bg-primary text-white" : "hover:bg-[#EAF7E6]"
              }`
            }
          >
            <item.icon size={20}/> <span>{item.label}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
