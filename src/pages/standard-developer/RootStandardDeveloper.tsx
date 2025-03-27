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

const standardDeveloperSiderBarMenu = [
  { path: "/standard-developer/dashboard", label: "Dashboard", icon: FaHome },
  {
    path: "/standard-developer/my-courses",
    label: "My Courses/LMS",
    icon: FaGraduationCap,
  },
  {
    path: "/standard-developer/all-courses",
    label: "All Courses",
    icon: FaPhotoVideo,
  },
  { path: "/standard-developer/history", label: "History", icon: MdHistory },
  { path: "/standard-developer/settings", label: "Settings", icon: MdSettings },
  { path: "/logout", label: "Logout", icon: MdLogout },
];
const RootStandardDeveloper = () => {
  return (
    <div>
      <Navbar />
      <CommonBanner
        name="Munna Ahmed"
        role="Developer (Intern)"
        imageUrl={userImg}
      />
      <div className="flex max-w-[1440px] mx-auto">
        <Sidebar menuItems={standardDeveloperSiderBarMenu} />
        <div className="flex-1 border-t border-t-[#E7E9E8] p-[24px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootStandardDeveloper;
