import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.scss'

import api from "./services/api";
import Home from '../src/pages/Home/Home';
import Capitulo from "./pages/Capitulo/Capitulo"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/capitulo/:manwhaId",
    element: <Capitulo />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
