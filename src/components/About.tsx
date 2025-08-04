import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About InstalMax</h2>
            <p>
              With over 15 years of experience in the heating industry,
              InstalMax has established itself as a trusted provider of central
              heating and furnace controller services. Our team of certified
              technicians brings expertise, reliability, and dedication to every
              project.
            </p>
            <p>
              We specialize in both residential and commercial heating
              solutions, from simple repairs to complete system installations.
              Our commitment to quality workmanship and customer satisfaction
              has made us the preferred choice for heating services in the
              region.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Emergency Service</p>
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
