import CommonBanner from "@/common/CommonBanner";
import Navbar from "@/Layout/Navbar";
import userImg from "/user.png";
import Sidebar from "@/components/consumer/standard/Sidebar";
import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdSettings, MdLogout } from "react-icons/md";

import CommonWrapper from "@/common/CommonWrapper";

const consumerMenu = [
  { path: "/basic/dashboard", label: "Dashboard", icon: FaHome },
  { path: "/basic/settings", label: "Settings", icon: MdSettings },
  { path: "/logout", label: "Logout", icon: MdLogout },
];

const BasicConsumer = () => {
  // Function to handle upgrade button click
  const handleUpgrade = () => {
    alert("Upgrade process initiated!");
    // You can also navigate to an upgrade page, show a modal, or make an API request
  };

  return (
    <div>
      <Navbar />
      <CommonBanner
        name="Ramjan Ali"
        role="Consumer (Basic)"
        imageUrl={userImg}
        onUpgrade={handleUpgrade} // Pass the function, not a string
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
