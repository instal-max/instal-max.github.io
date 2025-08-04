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
              Your trusted partner for central heating and furnace controller
              services. Quality work, reliable service, competitive prices.
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
            <h4>Services</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Central Heating Installation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Furnace Controller Repair
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Maintenance & Service
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Emergency Repairs
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className="fas fa-phone"></i> +1 (555) 123-4567
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@instalmax.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> 123 Main Street, Your
                City
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Business Hours</h4>
            <ul>
              <li>Monday - Friday: 8AM - 6PM</li>
              <li>Saturday: 9AM - 4PM</li>
              <li>Sunday: Emergency Only</li>
              <li>Emergency Service: 24/7</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 InstalMax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
