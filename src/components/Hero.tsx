import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Expert Central Heating & Furnace Controller Services</h1>
          <p>
            Professional installation, repair, and maintenance of central
            heating systems and furnace controllers. Reliable service you can
            trust.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get Free Quote
            </button>
            <a href="tel:+1234567890" className="btn btn-secondary">
              <i className="fas fa-phone"></i> Call Now
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <i className="fas fa-cogs"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
