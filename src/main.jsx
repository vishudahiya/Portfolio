import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import Starting from "./Starting.jsx";
import Experience from "./components/Experience.jsx";
import User, { gitHubLoader } from "./components/User/User.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Starting />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
      <Route loader={gitHubLoader} path="user" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
