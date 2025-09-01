import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Register";
import Admin from "../pages/DashboardAdmin";
import User from "../pages/DashboardUser";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },

  {
    element: <ProtectedRoute role="admin" />,
    children: [{ path: "/admin", element: <Admin /> }],
  },
  {
    element: <ProtectedRoute role="user" />,
    children: [{ path: "/user", element: <User /> }],
  },
]);
