import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>O firmie InstalMax</h2>
            <p>
              Dzięki ponad 15-letniemu doświadczeniu w branży grzewczej,
              InstalMax ugruntował swoją pozycję jako zaufany dostawca usług
              centralnego ogrzewania i sterowników pieców. Nasz zespół
              certyfikowanych techników wnosi wiedzę specjalistyczną,
              niezawodność i zaangażowanie do każdego projektu.
            </p>
            <p>
              Specjalizujemy się w rozwiązaniach grzewczych zarówno dla
              nieruchomości mieszkalnych, jak i komercyjnych, od prostych napraw
              po kompletne instalacje systemów. Nasze zaangażowanie w jakość
              wykonania i zadowolenie klientów uczyniło nas preferowanym
              wyborem w zakresie usług grzewczych w regionie.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Zrealizowanych projektów</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Lat doświadczenia</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Serwis awaryjny</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-graphic">
              <i className="fas fa-home"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
