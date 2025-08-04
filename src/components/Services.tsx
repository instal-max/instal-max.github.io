import React from "react";
import "./Services.css";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: "fas fa-tools",
      title: "Centralne Ogrzewanie Wieluń",
      description:
        "Kompletny montaż systemu centralnego ogrzewania w Wieluniu z nowoczesnym, energooszczędnym sprzętem i profesjonalną instalacją.",
      features: [
        "Montaż kotła Wieluń",
        "Systemy grzejnikowe",
        "Ogrzewanie podłogowe Wieluń",
        "Konfiguracja termostatu",
      ],
    },
    {
      icon: "fas fa-wrench",
      title: "Naprawa Sterowników Wieluń",
      description:
        "Ekspercka diagnostyka i naprawa sterowników pieców w Wieluniu, zapewniająca optymalną wydajność i efektywność energetyczną.",
      features: [
        "Diagnostyka sterowników Wieluń",
        "Naprawa płyt głównych",
        "Wymiana czujników",
        "Programowanie i kalibracja",
      ],
    },
    {
      icon: "fas fa-fire",
      title: "Wymiana Pieca Wieluń",
      description:
        "Profesjonalna wymiana pieca w Wieluniu, montaż nowoczesnych kotłów gazowych, elektrycznych i na paliwa stałe.",
      features: [
        "Wymiana kotła gazowego",
        "Montaż pieca elektrycznego",
        "Kotły na paliwa stałe",
        "Modernizacja systemu",
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nasze usługi w Wieluniu</h2>
          <p>
            Kompleksowe rozwiązania grzewcze dla mieszkańców Wielunia i okolic
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
