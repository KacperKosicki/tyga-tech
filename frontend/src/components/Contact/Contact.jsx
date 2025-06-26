import { useState } from 'react';
import styles from './Contact.module.scss';
import { Link } from 'react-router-dom';

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

    console.log(formData);
    alert('Wiadomość została wysłana!');
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.bgImageWrapper} data-aos="fade-left" data-aos-delay="0">
        <img src="/images/contact.png" alt="" className={styles.bgImage} />
      </div>

      <div className={styles.container}>
        <h2 data-aos="fade-up" data-aos-delay="100">Skontaktuj się z nami</h2>
        <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-up" data-aos-delay="200">
          <input type="text" name="name" placeholder="Imię i nazwisko *" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Adres email *" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Numer telefonu (opcjonalne)" onChange={handleChange} />
          <textarea name="message" placeholder="Wiadomość... *" required rows={5} onChange={handleChange}></textarea>

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