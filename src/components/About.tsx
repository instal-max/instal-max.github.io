import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>O firmie InstalMax - Wieluń</h2>
            <p>
              Dzięki ponad 30-letniemu doświadczeniu w branży grzewczej,
              InstalMax świadczy usługi centralnego ogrzewania w Wieluniu i okolicach. 
              Jesteśmy zaufanym dostawcą usług montażu, naprawy sterowników i wymiany 
              pieców w regionie wieluńskim. Wnosimy wiedzę specjalistyczną, 
              niezawodność i zaangażowanie do każdego projektu.
            </p>
            <p>
              Specjalizujemy się w kompleksowych rozwiązaniach grzewczych dla 
              mieszkańców Wielunia - od prostych napraw sterowników po kompletne 
              instalacje centralnego ogrzewania i wymianę pieców. Nasze zaangażowanie 
              w jakość wykonania i zadowolenie klientów uczyniło nas preferowanym 
              wyborem w zakresie usług grzewczych w Wieluniu.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Projektów w Wieluniu</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Lat doświadczenia</p>
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
