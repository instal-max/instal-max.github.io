import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
