import { useState } from "react";
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
        <button className="relative p-2 w-[40px] h-[40px] rounded-full bg-[#EAF7E6] cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M14 18C14 19.6569 12.6569 21 11 21C9.34315 21 8 19.6569 8 18M12.7965 5.23856C13.232 4.78864 13.5 4.17562 13.5 3.5C13.5 2.11929 12.3807 1 11 1C9.61929 1 8.5 2.11929 8.5 3.5C8.5 4.17562 8.76801 4.78864 9.2035 5.23856M1.54682 7.32296C1.53248 5.87161 2.31496 4.51631 3.57904 3.80306M20.4532 7.32296C20.4675 5.87161 19.6851 4.51631 18.421 3.80306M17 10.2C17 8.82087 16.3679 7.49823 15.2426 6.52304C14.1174 5.54786 12.5913 5 11 5C9.40871 5 7.88258 5.54786 6.75736 6.52304C5.63215 7.49823 5.00001 8.82087 5.00001 10.2C5.00001 12.4818 4.43414 14.1506 3.72807 15.3447C2.92334 16.7056 2.52098 17.3861 2.53687 17.5486C2.55505 17.7346 2.58852 17.7933 2.73934 17.9036C2.87118 18 3.53351 18 4.85819 18H17.1418C18.4665 18 19.1288 18 19.2607 17.9036C19.4115 17.7933 19.445 17.7346 19.4631 17.5486C19.479 17.3861 19.0767 16.7056 18.2719 15.3447C17.5659 14.1506 17 12.4818 17 10.2Z" stroke="#2DAD00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src={user.profileImg}
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-primary "
            />
            <div className="text-sm">
              <p className=" font-[400] text-[16px] font-primary">{user.name}</p>
              <p className="text-primary font-[400] text-[14px]">{user.role}</p>
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
