import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Usługi eksperta w zakresie centralnego ogrzewania</h1>
          <p>
            Profesjonalny montaż, naprawa i konserwacja systemów centralnego
            ogrzewania i sterowników pieców. Niezawodna usługa, której możesz
            zaufać.
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
