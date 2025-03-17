import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
        Content
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
