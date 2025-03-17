import Overview from "@/components/consumer/standard/Overview";
import Sidebar from "@/components/consumer/standard/Sidebar";
import { useState } from "react";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-100 p-5">
        {activePage === "dashboard" && <Overview />}
      </div>
    </div>
  );
};

export default Dashboard;
