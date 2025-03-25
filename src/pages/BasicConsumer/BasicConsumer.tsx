import CommonBanner from "@/common/CommonBanner";
import Navbar from "@/Layout/Navbar";
import userImg from "/user.png";
import Sidebar from "@/components/consumer/standard/Sidebar";
import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdHistory, MdSettings, MdLogout } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import CommonWrapper from "@/common/CommonWrapper";
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
const BasicConsumer = () => {
  return (
    <div>
      <Navbar />
      <CommonBanner
        name="Md Ramjan Ali"
        role="Consumer (Basic)"
        imageUrl={userImg}
      />
      <CommonWrapper>
        <div className="flex">
          <Sidebar menuItems={consumerMenu} />
          <div className="flex-1 border-t border-t-[#E7E9E8] pt-5 pl-5">
            <Outlet />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default BasicConsumer;
