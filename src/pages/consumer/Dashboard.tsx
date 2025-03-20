import Overview from "@/components/consumer/standard/Overview";
import { useState } from "react";

const Dashboard = () => {
  const [activePage] = useState("dashboard");
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-white p-5">
        {activePage === "dashboard" && <Overview />}
      </div>
    </div>
  );
};

export default Dashboard;
