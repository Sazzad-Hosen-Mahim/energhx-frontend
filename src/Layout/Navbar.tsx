import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import userImg from "/user.png"

interface User {
  name: string;
  role: string;
  profileImg: string;
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const user: User = {
    name: "Rahman Abdul Quadir",
    role: "Consumer (Standard)",
    profileImg:`${userImg}`, // Replace with actual image URL
  };

  return (
    <nav className=" bg-white border-b border-b-[#E7E9E8] p-4 flex justify-center items-center">
   <div className="w-[1440px] flex justify-between">
       {/* Left Section: Logo */}
       <div className="flex items-center space-x-2">
       <Link to={'/'}>
       <img
          src="https://s3-alpha-sig.figma.com/img/b47b/3cd6/6e06b1487bd0f3f26de872aeb5f99d8b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C8QNwR~yp4Du5n3yHqV5nfblvq7axWdwl5L7V7hi3XM1XIIeGyg9600CRDOgapJFn1sgGq9sJciOElgQtVIB-ScPVKradIlU~HVeW5ORoj8hHujTVLexeCd~WNdxTo9PUL7WSN4taKC~FUx06D0T6Vhwgo18Cl9oqs0oJV~TGYVsw61d388R~h57epJCDf~qBTPx3GLOLVhNHTKgNZ77zkaRhXEQnKMp5ShP-SjRZzgQtI5ug6qL7sDTx44CxD5~ZGRVrQQ3QWz6X5JHKihzRWPq0w8XhNERvuSwHb7CNMbnsqxf7o2AHyDu71G8U1y4vBzMlHg6tMdwOLqhCmhwUg__" // Replace with actual logo
          alt="Logo"
          className="h-8 w-[120px]"
        />
       </Link>
      </div>

      {/* Right Section: Notifications & User */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="relative p-2 text-gray-600 hover:text-green-600">
          <IoNotificationsOutline size={24} />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src={user.profileImg}
              alt="User"
              className="w-12 h-12 rounded-full border border-green-500"
            />
            <div className="text-sm">
              <p className="font-medium">{user.name}</p>
              <p className="text-green-600">{user.role}</p>
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
   </div>
    </nav>
  );
};

export default Navbar;
