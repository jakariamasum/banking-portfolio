import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/main-layout";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Transactions from "../pages/transactions";
import GetCard from "../pages/get-card";
import Comments from "../pages/comments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/get-card",
        element: <GetCard />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
    ],
  },
]);
