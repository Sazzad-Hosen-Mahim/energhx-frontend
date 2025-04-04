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
import RootServer from "@/pages/Server/RootServer";
import BasicServerInternDashboard from "@/pages/Server/BasicServerInternDashboard";
import ServerForm from "@/pages/Server/ServerForm";
import CertifiedAssociates from "@/pages/consumer/CertifiedAssociates";
import History from "@/pages/consumer/History";
import Service from "@/common/Service";
import BasicConsumner from "@/pages/BasicConsumer/BasicConsumer";
import BasicDashboard from "@/pages/BasicConsumer/BasicDashboard";
import BasicSettings from "@/pages/BasicConsumer/BasicSettings";
import AssociateProfile from "@/components/consumer/standard/certifiedAssociates/AssociateProfile";
import CertifiedAssociateLayout from "@/Layout/CertifiedAssociateLayout";

import ServerSettings from "@/pages/Server/ServerSettings";

import MyCourses from "@/pages/standard-developer/MyCourses";
import AllCourses from "@/pages/standard-developer/AllCourses";
import RootStandardServerCertificate from "@/pages/standard-server-certificate/RootStandardCeritificate";
import StarndardCertificateDasboard from "@/pages/standard-server-certificate/StarndardCertificateDasboard";
import AppointmentRequest from "@/pages/standard-server-certificate/AppointmentRequest";
import StandardServerMyCourse from "@/pages/standard-server-certificate/StandardServerMyCourse";
import StandardServerAllCourse from "@/pages/standard-server-certificate/StandardServerAllCourse";
import StandardServerHistory from "@/pages/standard-server-certificate/StandardServerHistory";
import StandardServerSubscription from "@/pages/standard-server-certificate/StandardServerSubscription";
import StandardServerSetting from "@/pages/standard-server-certificate/StandardServerSetting";
import RootStandardDeveloper from "@/pages/standard-developer/RootStandardDeveloper";
import StandardDeveloperDasboard from "@/pages/standard-developer/StandardDeveloperDasboard";
import StandardDeveloperSetting from "@/pages/standard-developer/StandardDeveloperSetting";
import StandardDeveloperHistory from "@/pages/standard-developer/StandardDeveloperHistory";
import OverviewDetails from "@/pages/standard-server-certificate/OverviewDetails";
import MyCourseDetails from "@/components/MyCourse/course-details/MyCourseDetails";
import CourseDetails from "@/pages/standard-developer/CourseDetails";
import RootMyCourse from "@/pages/standard-developer/RootMyCourse";


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
    path: "consumer", //this is standard consumer
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
    path: "server",
    element: <RootServer />,
    children: [
      {
        path: "",
        element: <BasicServerInternDashboard />,
      },
      {
        path: "settings",
        element: <ServerSettings />,
      },
      {
        path: "form",
        element: <ServerForm />,
      },
    ],
  }, // <-- Missing closing bracket added here
  {
    path: "basic", //this is basic consumer basboard
    element: <BasicConsumner />,
    children: [
      { path: "", element: <BasicDashboard /> },
      { path: "dashboard", element: <BasicDashboard /> },
      { path: "settings", element: <BasicSettings /> },
      {
        path: "certifiedAssociates",
        element: <CertifiedAssociateLayout />,
        children: [
          { index: true, element: <CertifiedAssociates /> },
          {
            path: "certified-associate-profile",
            element: <AssociateProfile />,
          },
        ],
      },
    ],
  },
  {
    path: "standard-developer",
    element: <RootStandardDeveloper />,
    children: [
      { path: "", element: <StandardDeveloperDasboard /> },
      { path: "dashboard", element: <StandardDeveloperDasboard /> },
      {
        path: "my-courses",
        element: <RootMyCourse />,
        children: [
          { path: "", element: <MyCourses /> },
          { path: ":id", element: <MyCourseDetails /> },
        ],
      },
      { path: "all-courses", element: <AllCourses /> },
      { path: "course/:id", element: <CourseDetails /> },
      { path: "history", element: <StandardDeveloperHistory /> },
      { path: "settings", element: <StandardDeveloperSetting /> },
    ],
  },
  {
    path: "standard-server-certificate",
    element: <RootStandardServerCertificate />,
    children: [
      { path: "", element: <StarndardCertificateDasboard /> },
      { path: "dashboard", element: <StarndardCertificateDasboard /> },
      { path: "appointment-request", element: <AppointmentRequest /> },
      { path: "my-courses", element: <StandardServerMyCourse /> },
      { path: "all-courses", element: <StandardServerAllCourse /> },
      { path: "history", element: <StandardServerHistory /> },
      { path: "subscrption", element: <StandardServerSubscription /> },
      { path: "settings", element: <StandardServerSetting /> },
      { path: "overview/:id", element: <OverviewDetails /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
