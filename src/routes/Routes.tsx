import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AdminRoute from "./AdminRoutes";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import RootConsumer from "@/pages/consumer/RootConsumer";
import Dashboard from "@/pages/consumer/Dashboard";
import BuildingInfo from "@/components/consumer/standard/BuildingInfo";
import Settings from "@/components/consumer/standard/Settings";
import CertifiedAssociates from "@/pages/consumer/CertifiedAssociates";
import History from "@/pages/consumer/History";
import Service from "@/common/Service";
import BasicConsumner from "@/pages/BasicConsumer/BasicConsumner";
import BasicDashboard from "@/pages/BasicConsumer/BasicDashboard";
import BasicBuildingInfo from "@/pages/BasicConsumer/BasicBuildingInfo";
import BasicCertifiedAssociates from "@/pages/BasicConsumer/BasicCertifiedAssociates";
import BasicHistory from "@/pages/BasicConsumer/BasicHistory";
import BasicService from "@/pages/BasicConsumer/BasicService";
import BasicSettings from "@/pages/BasicConsumer/BasicSettings";

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
      { path: "history/:id", element: <Service /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "basic",
    element: <BasicConsumner />,
    children: [
      { path: "", element: <BasicDashboard /> },
      { path: "dashboard", element: <BasicDashboard /> },
      { path: "buildingInformation", element: <BasicBuildingInfo /> },
      { path: "certifiedAssociates", element: <BasicCertifiedAssociates /> },
      { path: "history", element: <BasicHistory /> },
      { path: "history/:id", element: <BasicService /> },
      { path: "settings", element: <BasicSettings /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
