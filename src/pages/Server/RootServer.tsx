import CommonBanner from "@/common/CommonBanner";
import NavbarAdmin from "@/Layout/NavbarAdmin";
import Sidebar from "@/components/consumer/standard/Sidebar"; // Replace with your custom Sidebar component
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdSettings, MdLogout } from "react-icons/md";
import userImg from "/user.png";

export interface User {
  name: string;
  role: string;
  profileImg: string;
}

const RootServer: React.FC = () => {
  const [user] = useState<User>({
    name: "Sazzad Hosen",
    role: "Basic Server Intern",
    profileImg: "/user.png",
  });

  const serverMenu = [
    { path: "/server", label: "Dashboard", icon: FaHome },
    { path: "/server/settings", label: "Settings", icon: MdSettings },
    { path: "/logout", label: "Logout", icon: MdLogout },
  ];
  return (
    <div>
      <NavbarAdmin user={user} />

      <div>
        <CommonBanner
          name="Sazzad Hosen"
          role="Basic Server Intern "
          imageUrl={userImg}
        ></CommonBanner>
      </div>
      <div className="flex max-w-[1440px] mx-auto">
        <Sidebar menuItems={serverMenu} />
        {/* Adjust the prop name to match your custom Sidebar */}
        <div className="flex-1 border-t border-t-[#E7E9E8]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootServer;
