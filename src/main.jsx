import React from "react";
import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import TimelinesApp from "./app/timelines-app.jsx";
import ErrorPage from "./pages/error-page.jsx";
import SignUp from "./pages/sign-up.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./app/app-pages/dashboard.jsx";
import { AuthProvider } from "./contexts/authContext/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "app",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "app/:timelineId",
    element: <TimelinesApp />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
