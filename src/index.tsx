import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { Login } from "./pages/Login";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { Appointment } from "./pages/Appointment";
import { AppointmentDetails } from "./pages/AppointmentDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signin",
        element: <Signin />
      },
      {
        path: "dashboard",
        element: <Dashboard/>,
        children: [
          {
            path: 'appointments',
            element: <AppointmentDetails />
          }
        ]
      }
    ],
  },



]);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
