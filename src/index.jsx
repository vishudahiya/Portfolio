import React, { Profiler } from "react";
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
import Starting from "./Starting.jsx";
import Experience from "./components/Experience.jsx";
import User, { gitHubLoader } from "./components/User/User.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import Header from "./components/Header.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} errorElement={<NotFoundPage />}>
//       <Route path="" element={<Starting />} />
//       <Route path="about" element={<About />} />
//       <Route path="experience" element={<Experience />} />
//       <Route loader={gitHubLoader} path="user" element={<User />} />
//       <Route path="project" element={<Projects />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* <RouterProvider router={router} /> */}
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
