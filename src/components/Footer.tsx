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
              Twój zaufany partner w zakresie centralnego ogrzewania i
              sterowników pieców. Jakość pracy, niezawodny serwis,
              konkurencyjne ceny.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Usługi</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Montaż centralnego ogrzewania
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Naprawa sterowników pieców
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Konserwacja i serwis
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Naprawy awaryjne
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Informacje kontaktowe</h4>
            <ul>
              <li>
                <i className="fas fa-phone"></i> +1 (555) 123-4567
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@instalmax.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> ul. Główna 123, Twoje
                Miasto
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Godziny pracy</h4>
            <ul>
              <li>Poniedziałek - Piątek: 8:00 - 18:00</li>
              <li>Sobota: 9:00 - 16:00</li>
              <li>Niedziela: Tylko awarie</li>
              <li>Serwis awaryjny: 24/7</li>
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
