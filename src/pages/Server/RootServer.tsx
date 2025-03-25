import Navbar from "@/Layout/Navbar";
import { Outlet } from "react-router-dom";

const RootServer: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootServer;
