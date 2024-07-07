import React from "react";
import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import TimelinesApp from "./app/timelines-app.jsx";
import ErrorPage from "./pages/error-page.jsx";
import SignUp from "./pages/sign-up.jsx";
import Login from "./pages/login.jsx";

const router = createBrowserRouter([
  {
    path: "/Timelines",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Timelines/app",
    element: <TimelinesApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Timelines/sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Timelines/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
