import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { Login } from "./pages/Login";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { AppointmentDetails } from "./pages/AppointmentDetails";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Appointment } from "./pages/Appointment";
import HealthTopics from "./pages/HealthTopics";
import HealthCareHome from "./pages/HealthCareHome";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "",
            element: <HealthCareHome/>,
          },
          {
            path: "health-topics",
            element: <HealthTopics />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "appointments",
            element: <AppointmentDetails />,
          },
          {
            path: "book",
            element: <Appointment />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
