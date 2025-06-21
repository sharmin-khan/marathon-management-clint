import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Home/Register";
import Login from "../Pages/Home/Login";

const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
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
    }
   ]
  },
]);
export default router;