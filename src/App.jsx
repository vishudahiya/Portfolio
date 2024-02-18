import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div class="scroll-smooth">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
