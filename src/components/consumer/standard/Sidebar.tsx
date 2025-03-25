import { SidebarProps } from "@/types";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <div className="w-fit h-screen text-[#758179] border-r border-t border-r-[#E7E9E8] border-t-[#E7E9E8]  border-gray-300 z-30 ">
      <ul className="">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center font-primary gap-1 font-light text-[18px] relative group  xl:pr-10 p-3 rounded-sm ${
                isActive ? "bg-primary text-white" : "hover:bg-[#EAF7E6]"
              }`
            }
          >
            {/* <span>{item.icon}</span> */}
            <item.icon size={20} />
            <span className="hidden xl:block">{item.label}</span>

            <div className="absolute xl:hidden translate-x-9">
              <div className="invisible group-hover:visible min-w-fit xl:block">
                <p className="p-2 text-white rounded-md bg-primary">
                  {item.label}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
