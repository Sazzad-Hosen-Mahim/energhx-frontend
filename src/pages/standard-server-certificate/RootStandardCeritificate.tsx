import CommonBanner from "@/common/CommonBanner";
import Navbar from "@/Layout/Navbar";
import userImg from "/user.png";
import Sidebar from "@/components/consumer/standard/Sidebar";
import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdHistory, MdSettings, MdLogout } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";

const serverInternMenu = [
  {
    path: "/standard-server-certificate/dashboard",
    label: "Dashboard",
    icon: FaHome,
  },
  {
    path: "/standard-server-certificate/appointment-request",
    label: "Appointment Request",
    icon: FaGraduationCap,
  },
  {
    path: "/standard-server-certificate/my-courses",
    label: "My Courses",
    icon: FaPhotoVideo,
  },
  {
    path: "/standard-server-certificate/all-courses",
    label: "All Courses",
    icon: FaPhotoVideo,
  },
  {
    path: "/standard-server-certificate/history",
    label: "History",
    icon: MdHistory,
  },
  {
    path: "/standard-server-certificate/subscrption",
    label: "Subscription",
    icon: MdHistory,
  },
  {
    path: "/standard-server-certificate/settings",
    label: "Settings",
    icon: MdSettings,
  },
  { path: "/logout", label: "Logout", icon: MdLogout },
];
const RootStandardServerCertificate = () => {
  return (
    <div>
      <Navbar />
      <CommonBanner
        name="Munna Ahmed"
        role="Server (Intern)"
        imageUrl={userImg}
      />
      <div className="flex max-w-[1440px] mx-auto">
        <Sidebar menuItems={serverInternMenu} />
        <div className="flex-1 border-t border-t-[#E7E9E8]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootStandardServerCertificate;
