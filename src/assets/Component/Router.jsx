import { createBrowserRouter } from "react-router";
import MainRouter from "./MainRouter";
import Error from "./Error";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:Error,
    Component:MainRouter,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
      path:"/home",
      Component:Home
      },

      
    ]
  },
]);