import { createBrowserRouter } from "react-router";
import MainRouter from "./MainRouter";

import Home from "../Pages/Home";
import App from "../Pages/App";
import Installation from "../Pages/Installation";
import Rechart from "../Pages/Rechart";
import AppDetails from "../Pages/AppDetails";
import Errorpage from "./Errorpage";
import NotFound from "./NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Errorpage></Errorpage>,
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
      {
        path:"/App",
        Component:App
      },
      {
        path:"/installtion",
        Component:Installation
      },
       {
        path:"/rechart",
        Component:Rechart
      },
      {
        path:"/apps/:id",
        Component:AppDetails
      },
      {
        path:'/apps/:id',
        Component:NotFound
      }

      
    ]
  },
]);