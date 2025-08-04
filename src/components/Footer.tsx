import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
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
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              <i className="fas fa-fire"></i> InstalMax
            </h3>
            <p>
              Twój zaufany partner w zakresie centralnego ogrzewania Wieluń, 
              naprawy sterowników Wieluń i wymiany pieca Wieluń. Jakość pracy, 
              niezawodny serwis, konkurencyjne ceny.
            </p>
          </div>
          <div className="footer-section">
            <h4>Usługi w Wieluniu</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Centralne ogrzewanie Wieluń
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Naprawa sterowników Wieluń
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Wymiana pieca Wieluń
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Serwis grzewczy Wieluń
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Informacje kontaktowe</h4>
            <ul>
              <li>
                <i className="fas fa-phone"></i> +48 668 152 243
              </li>
              <li>
                <i className="fas fa-envelope"></i> andrzejlyczko@gmail.com
              </li>
                            <li>
                <i className="fas fa-map-marker-alt"></i> Wieluń i okolice
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Godziny pracy</h4>
            <ul>
              <li>Poniedziałek - Piątek: 8:00 - 18:00</li>
              <li>Sobota: 8:00 - 16:00</li>
              <li>Niedziela: Tylko awarie</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 InstalMax. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
