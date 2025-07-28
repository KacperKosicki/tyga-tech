import { useState } from 'react';
import styles from './Contact.module.scss';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'; // ⬅️ Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptPrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptPrivacy) {
      alert('Aby wysłać wiadomość, musisz zaakceptować politykę prywatności.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(
      'service_eitb52o', // ← Twój Service ID
      'template_grxwv7b', // ← Nazwa szablonu EmailJS (utwórz go jeśli jeszcze nie ma)
      templateParams,
      '_nZdU2dx108RYVXv_' // ← Twój Public Key
    )
      .then(() => {
        alert('Wiadomość została wysłana!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          acceptPrivacy: false,
        });
      })
      .catch((error) => {
        console.error('Błąd EmailJS:', error);
        alert('Wystąpił błąd podczas wysyłania wiadomości.');
      });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.bgImageWrapper} data-aos="fade-left" data-aos-delay="0">
        <img src="/images/contact.png" alt="" className={styles.bgImage} />
      </div>

      <div className={styles.container}>
        <h2 data-aos="fade-up" data-aos-delay="100">Skontaktuj się z nami</h2>
        <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-up" data-aos-delay="200">
          <input type="text" name="name" placeholder="Imię i nazwisko *" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Adres email *" required value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Numer telefonu (opcjonalne)" value={formData.phone} onChange={handleChange} />
          <textarea name="message" placeholder="Wiadomość... *" required rows={5} value={formData.message} onChange={handleChange}></textarea>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              name="acceptPrivacy"
              checked={formData.acceptPrivacy}
              onChange={handleChange}
              required
            />
            <span>
              Wyrażam zgodę na przetwarzanie moich danych osobowych przez TYGA-TECH Sp. z o.o.
              w celu kontaktu. Zapoznałem się z{' '}
              <Link to="/polityka-prywatnosci" target="_blank">Polityką Prywatności</Link>.
            </span>
          </label>

          <button type="submit">Wyślij wiadomość</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
