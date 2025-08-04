import React from "react";
import "./Features.css";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: "fas fa-clock",
      title: "Serwis awaryjny 24/7",
      description: "Całodobowe naprawy awaryjne, gdy najbardziej ich potrzebujesz",
    },
    {
      icon: "fas fa-certificate",
      title: "Certyfikowani technicy",
      description: "W pełni licencjonowani i certyfikowani specjaliści od systemów grzewczych",
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "Konkurencyjne ceny",
      description: "Uczciwe, przejrzyste ceny bez ukrytych opłat",
    },
    {
      icon: "fas fa-thumbs-up",
      title: "Gwarancja satysfakcji",
      description: "100% gwarancja satysfakcji na wszystkie nasze prace",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
