import { createBrowserRouter } from "react-router";
import MainRouter from "./MainRouter";
import Error from "./Error";
import Home from "../Pages/Home";
import App from "../Pages/App";
import Installation from "../Pages/Installation";

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
      {
        path:"/App",
        Component:App
      },
      {
        path:"/installtion",
        Component:Installation
      },

      
    ]
  },
]);