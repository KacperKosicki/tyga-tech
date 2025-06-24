import { useState } from 'react';
import styles from './ReportForm.module.scss';
import { Link } from 'react-router-dom';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    model: '',
    description: '',
    file: null,
    acceptPrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptPrivacy) {
      alert('Aby wysłać zgłoszenie, musisz zaakceptować politykę prywatności.');
      return;
    }

    console.log(formData);
    alert('Zgłoszenie wysłane!');
  };

  return (
    <section className={styles.reportSection}>
      <div className={styles.bgImageWrapper} data-aos="fade-left">
        <img src="/images/undraw-bug-fixing.png" alt="" className={styles.bgImage} />
      </div>

      <div className={styles.container}>
        <h2 data-aos="fade-up">Zgłoszenie usterki</h2>
        <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-up">
          <input type="text" name="name" placeholder="Imię i nazwisko" required onChange={handleChange} />
          <input type="text" name="company" placeholder="Nazwa firmy" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Numer telefonu" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Adres email" required onChange={handleChange} />
          <input type="text" name="model" placeholder="Model maszyny" onChange={handleChange} />
          <textarea name="description" placeholder="Opis usterki..." required rows={5} onChange={handleChange}></textarea>
          <input type="file" name="file" accept="image/*" onChange={handleChange} />

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
              w celu obsługi zgłoszenia. Zapoznałem się z{' '}
              <Link to="/polityka-prywatnosci" target="_blank">Polityką Prywatności</Link>.
            </span>
          </label>

          <button type="submit">Wyślij zgłoszenie</button>
        </form>
      </div>
    </section>
  );
};

export default ReportForm;
