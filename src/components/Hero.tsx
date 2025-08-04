import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Centralne Ogrzewanie Wieluń | Naprawa Sterowników | Wymiana Pieca</h1>
          <p>
            Profesjonalny montaż centralnego ogrzewania Wieluń, naprawa 
            sterowników Wieluń i wymiana pieca Wieluń. 30+ lat doświadczenia, 
            certyfikowani technicy, konkurencyjne ceny. Obsługujemy Wieluń i okolice.
          </p>
          <div className="hero-buttons">
            <a href="tel:+48668152243" className="btn btn-primary">
              <i className="fas fa-phone"></i> Zadzwoń teraz
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
