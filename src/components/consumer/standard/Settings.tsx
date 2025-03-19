import { useState } from "react";
import { FaUser, FaLock, FaUserFriends, FaCreditCard } from "react-icons/fa";
import Profile from "@/components/consumer/standard/settings/Profile";
import Password from "@/components/consumer/standard/settings/Password";
import SocialProfile from "@/components/consumer/standard/settings/SocialProfile";
import Billing from "@/components/consumer/standard/settings/Billing";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "password":
        return <Password />;
      case "social":
        return <SocialProfile />;
      case "billing":
        return <Billing />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="flex space-x-4 border-b border-gray-300 pb-4">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center px-5 py-4 rounded-lg transition-all ${
            activeTab === "profile"
              ? "bg-[#EAF7E6] text-black border-b border-[#2DAD00] text-2xl"
              : "bg-white text-gray-700 "
          }`}
        >
          <FaUser className="mr-2 text-2xl" /> Profile
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className={`flex items-center px-4 py-2 rounded-lg transition-all ${
            activeTab === "password"
              ? "bg-[#EAF7E6] text-black border-b border-[#2DAD00] text-2xl"
              : "bg-white text-gray-700 "
          }`}
        >
          <FaLock className="mr-2 text-2xl" /> Password
        </button>
        <button
          onClick={() => setActiveTab("social")}
          className={`flex items-center px-4 py-2 rounded-lg transition-all ${
            activeTab === "social"
              ? "bg-[#EAF7E6] text-black border-b border-[#2DAD00] text-2xl"
              : "bg-white text-gray-700 "
          }`}
        >
          <FaUserFriends className="mr-2 text-2xl" /> Social Profile
        </button>
        <button
          onClick={() => setActiveTab("billing")}
          className={`flex items-center px-4 py-2 rounded-lg transition-all ${
            activeTab === "billing"
              ? "bg-[#EAF7E6] text-black border-b border-[#2DAD00] text-2xl"
              : "bg-white text-gray-700 "
          }`}
        >
          <FaCreditCard className="mr-2 text-2xl" /> Billing
        </button>
      </div>
      <div className="mt-8">{renderTabContent()}</div>
    </div>
  );
};

export default Settings;
