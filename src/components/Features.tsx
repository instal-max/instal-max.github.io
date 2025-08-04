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
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency repairs when you need them most",
    },
    {
      icon: "fas fa-certificate",
      title: "Certified Technicians",
      description: "Fully licensed and certified heating system professionals",
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "Competitive Pricing",
      description: "Fair, transparent pricing with no hidden fees",
    },
    {
      icon: "fas fa-thumbs-up",
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all our work",
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
