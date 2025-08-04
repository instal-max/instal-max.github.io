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
          <h1>Usługi eksperta w zakresie centralnego ogrzewania</h1>
          <p>
            Profesjonalny montaż, naprawa i konserwacja systemów centralnego
            ogrzewania i sterowników pieców. Niezawodna usługa, której możesz
            zaufać.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Otrzymaj darmową wycenę
            </button>
            <a href="tel:+1234567890" className="btn btn-secondary">
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
