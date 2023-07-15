import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main.jsx";
import Entry from "./pages/Entry";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import List from "./pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "entry", element: <Entry></Entry> },
      { path: "edit", element: <Edit></Edit> },
      { path: "list", element: <List></List> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
