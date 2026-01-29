import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ContactForm from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />

      {/* 1. HERO SECTION */}
      <section id="home" className="scroll-mt-20">
        <Home />
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      {/* 3. Contact SECTION */}
      <section id="Contact" className="scroll-mt-20">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;
