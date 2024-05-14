import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Profile from "./components/Profile/Profile"
import Root from "./components/Root/Root";
import Homepage from "./components/Homepage/Homepage";
import Bookings from "./components/Bookings/Bookings";
import Mybookings from "./components/Mybookings/Mybookings";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Authprovider from "./components/Authprovider/Authprovider";
import Privateroute from "./components/PrivateRoute/Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/profile",
        element: <Privateroute><Profile></Profile></Privateroute>,
      },
      {
        path: "/bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "/mybookings",
        element: <Privateroute><Mybookings></Mybookings></Privateroute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/logout",
        element: <Logout></Logout>,
      },
      {
        path: "/register",
        element: <Authprovider><Register></Register></Authprovider>,
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);