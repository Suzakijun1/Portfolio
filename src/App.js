import React from "react";
import Typed from "react-typed";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Particles from "./components/Particles/ParticlesBackground";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Particles />
      <Navbar />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
