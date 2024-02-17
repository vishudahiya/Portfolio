import Starting from "./Starting";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div class="scroll-smooth">
      <Header />
      <Starting />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}
