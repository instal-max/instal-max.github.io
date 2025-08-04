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
      title: "Montaż centralnego ogrzewania",
      description:
        "Kompletny montaż systemu centralnego ogrzewania z nowoczesnym, energooszczędnym sprzętem i profesjonalną instalacją.",
      features: [
        "Montaż kotła",
        "Systemy grzejnikowe",
        "Ogrzewanie podłogowe",
        "Konfiguracja termostatu",
      ],
    },
    {
      icon: "fas fa-wrench",
      title: "Naprawa sterowników pieców",
      description:
        "Ekspercka diagnostyka i naprawa sterowników pieców, zapewniająca optymalną wydajność i efektywność energetyczną.",
      features: [
        "Diagnostyka sterowników",
        "Naprawa płyt głównych",
        "Wymiana czujników",
        "Programowanie i kalibracja",
      ],
    },
    {
      icon: "fas fa-shield-alt",
      title: "Konserwacja i serwis",
      description:
        "Regularne usługi konserwacyjne, które utrzymują Twój system grzewczy w sprawności i zapobiegają kosztownym awariom.",
      features: [
        "Serwis coroczny",
        "Naprawy awaryjne",
        "Modernizacja systemów",
        "Optymalizacja wydajności",
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nasze usługi</h2>
          <p>
            Kompleksowe rozwiązania grzewcze dla nieruchomości mieszkalnych i
            komercyjnych
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
