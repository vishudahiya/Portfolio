import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import User from "./components/User/User";
import Starting from "./Starting";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div class="scroll-smooth ">
      <Header />
      <Starting />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
