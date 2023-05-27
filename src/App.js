import React from "react";
import Typed from "react-typed";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
