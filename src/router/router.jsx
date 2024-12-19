// router.js
import { createBrowserRouter } from "react-router-dom";

import Indonesia from "../pages/Indonesia";
import Programming from "../pages/Programming";
import Covid from "../pages/Covid";
import Saved from "../pages/Saved";
import Search from "../pages/Search";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Indonesia />,
      },
      {
        path: "programming",
        element: <Programming />,
      },
      {
        path: "covid",
        element: <Covid />,
      },
      {
        path: "saved",
        element: <Saved />,
      },
      {
        path: "search/:query",
        element: <Search />,
      },
    ],
  },
]);

export default router;
