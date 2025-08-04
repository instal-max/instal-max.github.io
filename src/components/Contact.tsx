import React, { useState } from "react";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Format phone number
    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/\D/g, "");
    if (phoneNumber.length >= 6) {
      return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    } else if (phoneNumber.length >= 3) {
      return phoneNumber.replace(/(\d{3})(\d{1,3})/, "($1) $2");
    }
    return phoneNumber;
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.service) {
      showNotification("Proszę wypełnić wszystkie wymagane pola.", "error");
      return;
    }

    if (!isValidEmail(formData.email)) {
      showNotification("Proszę podać prawidłowy adres email.", "error");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      showNotification(
        "Dziękujemy! Twoja wiadomość została wysłana. Wkrótce się z Tobą skontaktujemy.",
        "success"
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      showNotification(
        "Przepraszamy, wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Skontaktuj się z nami</h2>
          <p>
            Gotów na poprawę swojego systemu grzewczego? Skontaktuj się z nami w celu bezpłatnej konsultacji
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3>Telefon</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>info@instalmax.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Adres</h3>
                <p>
                  ul. Główna 123
                  <br />
                  Twoje Miasto, 12-345
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3>Godziny pracy</h3>
                <p>
                  Pon-Pt: 8:00-18:00
                  <br />
                  Sob: 9:00-16:00
                  <br />
                  Awarie: 24/7
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Twoje imię i nazwisko *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Twój email *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Twój telefon"
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Wybierz usługę *</option>
                  <option value="installation">
                    Montaż centralnego ogrzewania
                  </option>
                  <option value="repair">Naprawa sterownika pieca</option>
                  <option value="maintenance">Serwis konserwacyjny</option>
                  <option value="emergency">Naprawa awaryjna</option>
                  <option value="consultation">Bezpłatna konsultacja</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Opowiedz nam o swoich potrzebach grzewczych..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {notification && (
        <div className={`notification notification-${notification.type}`}>
          <div className="notification-content">
            <span className="notification-message">{notification.message}</span>
            <button
              className="notification-close"
              onClick={() => setNotification(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
