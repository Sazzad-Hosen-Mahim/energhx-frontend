import Sidebar from "@/components/consumer/standard/Sidebar";
import { Outlet } from "react-router-dom";

const RootConsumer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default RootConsumer;
