import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register";
import Login from "../Pages/Home/Login";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import GlobalMarathons from "../Pages/MarathonInfo/GlobalMarathons";
import RaceManagement from "../Pages/MarathonInfo/RaceManagement";
import RunningLegacy from "../Pages/MarathonInfo/RunningLegacy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "../Routes/PrivateRoutes";
import MarathonDetails from "../Pages/MarathonDetails/MarathonDetails";
import Marathons from "../Section/Marathons";
import MarathonCard from "../Pages/MarathonCard/MarathonCard";
import MarathonRegistrationForm from "../Pages/MarathonRegistrationForm/MarathonRegistrationForm";
import MyApply from "../Pages/Dashboard/MyApply";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import MyMarathonList from "../Pages/Dashboard/MyMarathonList";
import AddMarathons from "../Pages/Dashboard/AddMarathons";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "global-marathons",
        Component: GlobalMarathons,
      },
      {
        path: "race-management",
        Component: RaceManagement,
      },
      {
        path: "running-legacy",
        Component: RunningLegacy,
      },
      {
        path: "marathonCard",
        Component:MarathonCard,
        // element: (
        //   <PrivateRoutes>
        //     <MarathonCard></MarathonCard>
        //   </PrivateRoutes>
        // ),
      },
      {
        path: "/marathonDetails/:id",
        element: (
          <PrivateRoutes>
            <MarathonDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/register/:id",
        element: (
          <PrivateRoutes>
            <MarathonRegistrationForm></MarathonRegistrationForm>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
          {
            path:'/dashboard/addMarathons',
            element:<PrivateRoutes><AddMarathons></AddMarathons></PrivateRoutes>
          },
          {
            path:"/dashboard/myMarathonList",
            element:<PrivateRoutes><MyMarathonList></MyMarathonList></PrivateRoutes>
          },
               {
            path: "/dashboard/myApply",
            element: (
              <PrivateRoutes>
                <MyApply></MyApply>
              </PrivateRoutes>
            ),
          }
        ],
      },
    ],
  },
]);
export default router;
