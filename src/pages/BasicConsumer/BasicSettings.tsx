import { useState } from "react";
import { FaUser, FaLock, FaUserFriends, FaCreditCard } from "react-icons/fa";
import Profile from "@/components/consumer/standard/settings/Profile";
import Password from "@/components/consumer/standard/settings/Password";
import SocialProfile from "@/components/consumer/standard/settings/SocialProfile";
import Billing from "@/components/consumer/standard/settings/Billing";
import Settings from "@/components/consumer/standard/Settings";

const BasicSettings = () => {
 

  return (
    <div>
      <Settings/>
    </div>
  );
};

export default BasicSettings;
