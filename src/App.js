import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Particles from "./components/Particles/ParticlesBackground";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import config from "react-reveal/globals";
config({ ssrFadeout: true });
function App() {
  return (
    <Router>
      <Particles />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
