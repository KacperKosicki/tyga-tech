import { useState } from 'react';
import styles from './ReportForm.module.scss';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Zgłoszenie wysłane!');
  };

  return (
    <section className={`${styles.reportSection} ${styles.fadeIn}`}>
      <div className={styles.bgImageWrapper}>
        <img src="/images/undraw-bug-fixing.png" alt="" className={styles.bgImage} />
      </div>

      <div className={styles.container}>
        <h2>Zgłoszenie usterki</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="name" placeholder="Imię" required onChange={handleChange} />
          <input type="text" name="company" placeholder="Nazwa firmy" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Numer telefonu" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Adres email" required onChange={handleChange} />
          <textarea name="description" placeholder="Opis usterki..." required rows={5} onChange={handleChange}></textarea>
          <input type="file" name="file" accept="image/*" onChange={handleChange} />
          <button type="submit">Wyślij zgłoszenie</button>
        </form>
      </div>
    </section>
  );
};

export default ReportForm;
