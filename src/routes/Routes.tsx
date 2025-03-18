import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AdminRoute from "./AdminRoutes";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import RootConsumer from "@/pages/consumer/RootConsumer";
import Dashboard from "@/pages/consumer/Dashboard";
import BuildingInfo from "@/components/consumer/standard/BuildingInfo";
import CertifiedAssociates from "@/components/consumer/standard/CertifiedAssociates";
import History from "@/components/consumer/standard/History";
import Settings from "@/components/consumer/standard/Settings";
import RootServer from "@/pages/Server/RootServer";
import ServerInternDashboard from "@/pages/Server/ServerInternDashboard";
import Setting from "@/components/Server/Basic/Setting";
import ServerForm from "@/pages/Server/ServerForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/admin",
        element: <AdminRoute />,
        children: [{ path: "", element: <AdminDashboard /> }],
      },
    ],
  },
  {
    path: "consumer",
    element: <RootConsumer />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "buildingInformation", element: <BuildingInfo /> },
      { path: "certifiedAssociates", element: <CertifiedAssociates /> },
      { path: "history", element: <History /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "server",
    element: <RootServer />,
    children: [
      {
        path: "",
        element: <ServerInternDashboard />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "form",
        element: <ServerForm />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
