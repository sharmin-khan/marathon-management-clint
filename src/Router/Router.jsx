import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register";
import Login from "../Pages/Home/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "../Routes/PrivateRoutes";
import MarathonDetails from "../Pages/MarathonDetails/MarathonDetails";

const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
        index:true,
        Component:Home,
    },
    {
        path:'register',
        Component:Register,
    },
    {
        path:'login',
        Component:Login,
    },
   {
  path: '/marathonDetails/:id',
  element: <PrivateRoutes><MarathonDetails /></PrivateRoutes>
}
   ]
  },
]);
export default router;