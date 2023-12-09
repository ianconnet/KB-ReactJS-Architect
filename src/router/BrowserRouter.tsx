import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"dashboard",
      element:<Dashboard />
    }
  ]);

export default function BrowserRouter() {
  return router
}
