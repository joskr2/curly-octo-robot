import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Reservations from "./pages/Reservations";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  }
] );

ReactDOM.createRoot( document.getElementById( "root" ) ).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);