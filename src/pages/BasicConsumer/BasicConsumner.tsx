import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdHistory, MdSettings, MdLogout } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import CommonBanner from "@/common/CommonBanner";
import Navbar from "@/Layout/Navbar";
import userImg from "user.png";
import Sidebar from "@/components/consumer/standard/Sidebar";

const consumerMenu = [
  { path: "/basic/dashboard", label: "Dashboard", icon: FaHome },
  {
    path: "/basic/buildingInformation",
    label: "Building Information",
    icon: BsBuilding,
  },
  {
    path: "/basic/certifiedAssociates",
    label: "Certified Associates",
    icon: IoPeople,
  },
  { path: "/basic/history", label: "History", icon: MdHistory },
  { path: "/basic/settings", label: "Settings", icon: MdSettings },
  { path: "/logout", label: "Logout", icon: MdLogout },
];
const BasicConsumner = () => {
  return (
    <div>
      <Navbar />
      <CommonBanner
        name="Md Ramjan Ali"
        role="Consumer (Basic)"
        imageUrl={userImg}
      />
      <div className="flex max-w-[1440px] mx-auto">
        <Sidebar menuItems={consumerMenu} />
        <div className="flex-1 border-t border-t-[#E7E9E8]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BasicConsumner;
