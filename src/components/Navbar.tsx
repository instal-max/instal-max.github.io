import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>
            <i className="fas fa-fire"></i> InstalMax
          </h2>
        </div>
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <button className="nav-link" onClick={() => scrollToSection("home")}>
            Home
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button className="nav-link" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
        <div
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
