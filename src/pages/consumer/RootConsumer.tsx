import Sidebar from "@/components/consumer/standard/Sidebar";
import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdHistory, MdSettings, MdLogout } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";

const consumerMenu = [
  { path: "/consumer/dashboard", label: "Dashboard", icon: FaHome },
  { path: "/consumer/buildingInformation", label: "Building Information", icon: BsBuilding },
  { path: "/consumer/certifiedAssociates", label: "Certified Associates", icon: IoPeople },
  { path: "/consumer/history", label: "History", icon: MdHistory },
  { path: "/consumer/settings", label: "Settings", icon: MdSettings },
  { path: "/logout", label: "Logout", icon: MdLogout },
];

const RootConsumer = () => {
  return (
    <div className="flex px-24">
      <Sidebar menuItems={consumerMenu} />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default RootConsumer;
