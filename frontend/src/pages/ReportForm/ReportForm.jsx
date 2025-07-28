import { useState, useRef } from 'react';
import styles from './ReportForm.module.scss';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'; // ← dodane

const ReportForm = () => {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    model: '',
    description: '',
    files: [],
    acceptPrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (name === 'files') {
      const existingNames = formData.files.map((file) => file.name);
      const newFiles = Array.from(files).filter(
        (file) => !existingNames.includes(file.name)
      );

      if (newFiles.length === 0) {
        alert('To zdjęcie zostało już dodane!');
        fileInputRef.current.value = null;
        return;
      }

      const allowedFiles = newFiles.slice(0, 5 - formData.files.length);

      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...allowedFiles],
      }));

      fileInputRef.current.value = null;
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRemoveFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
    fileInputRef.current.value = null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptPrivacy) {
      alert('Aby wysłać zgłoszenie, musisz zaakceptować politykę prywatności.');
      return;
    }

    const fileList = formData.files.map((file) => file.name).join(', ');

    const templateParams = {
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      model: formData.model,
      description: formData.description,
      fileList: fileList || 'Brak zdjęć',
    };

    emailjs.send(
      'service_eitb52o',      // ← Twój Service ID
      'template_rola5xi',      // ← Szablon zgłoszenia
      templateParams,
      '_nZdU2dx108RYVXv_'     // ← Twój Public Key
    )
      .then(() => {
        alert('Zgłoszenie zostało wysłane!');
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          model: '',
          description: '',
          files: [],
          acceptPrivacy: false,
        });
      })
      .catch((error) => {
        console.error('Błąd EmailJS:', error);
        alert('Wystąpił błąd podczas wysyłania zgłoszenia.');
      });
  };

  return (
    <section className={styles.reportSection}>
      <div className={styles.bgImageWrapper} data-aos="fade-left">
        <img src="/images/report.png" alt="" className={styles.bgImage} />
      </div>

      <div className={styles.container}>
        <h2 data-aos="fade-up">Zgłoszenie usterki</h2>
        <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-up">
          <input type="text" name="name" placeholder="Imię i nazwisko *" required value={formData.name} onChange={handleChange} />
          <input type="text" name="company" placeholder="Nazwa firmy (opcjonalne)" value={formData.company} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Numer telefonu (opcjonalne)" value={formData.phone} onChange={handleChange} />
          <input type="email" name="email" placeholder="Adres email *" required value={formData.email} onChange={handleChange} />
          <input type="text" name="model" placeholder="Model maszyny (opcjonalne)" value={formData.model} onChange={handleChange} />
          <textarea name="description" placeholder="Opis usterki... *" required rows={5} value={formData.description} onChange={handleChange}></textarea>

          <label className={styles.fileInputLabel}>
            <span>Kliknij, aby dodać zdjęcie | Dodano {formData.files.length} z 5 zdjęć</span>
            <input
              type="file"
              name="files"
              accept="image/*"
              multiple
              onChange={handleChange}
              disabled={formData.files.length >= 5}
              ref={fileInputRef}
              hidden
            />
          </label>

          <div className={styles.fileList}>
            {formData.files.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <div className={styles.preview}>
                  <img src={URL.createObjectURL(file)} alt={`preview-${index}`} />
                  <span>{file.name}</span>
                </div>
                <button type="button" onClick={() => handleRemoveFile(index)} title="Usuń zdjęcie">
                  &times;
                </button>
              </div>
            ))}
          </div>

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

          <button type="submit" className={styles.submitButton}>
            Wyślij zgłoszenie
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReportForm;
