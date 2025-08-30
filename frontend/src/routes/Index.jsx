import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Register";
import Admin from "../pages/DashboardAdmin";
import User from "../pages/DashboardUser";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/admin", element: <Admin /> },
  { path: "/user", element: <User /> },
]);
