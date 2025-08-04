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
      title: "Central Heating Installation",
      description:
        "Complete central heating system installation with modern, energy-efficient equipment and professional setup.",
      features: [
        "Boiler installation",
        "Radiator systems",
        "Underfloor heating",
        "Thermostat setup",
      ],
    },
    {
      icon: "fas fa-wrench",
      title: "Furnace Controller Repair",
      description:
        "Expert diagnosis and repair of furnace controllers, ensuring optimal performance and energy efficiency.",
      features: [
        "Controller diagnostics",
        "Circuit board repair",
        "Sensor replacement",
        "Programming & calibration",
      ],
    },
    {
      icon: "fas fa-shield-alt",
      title: "Maintenance & Service",
      description:
        "Regular maintenance services to keep your heating system running efficiently and prevent costly breakdowns.",
      features: [
        "Annual servicing",
        "Emergency repairs",
        "System upgrades",
        "Performance optimization",
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Comprehensive heating solutions for residential and commercial
            properties
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
