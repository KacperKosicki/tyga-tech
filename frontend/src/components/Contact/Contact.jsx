import { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Wiadomość została wysłana!');
    };

    return (
        <section className={styles.contactSection}>
            <div
                className={styles.bgImageWrapper}
                data-aos="fade-left"
                data-aos-delay="0"
            >
                <img
                    src="/images/undraw-contact.png"
                    alt=""
                    className={styles.bgImage}
                />
            </div>
            <div className={styles.container}>
                <h2 data-aos="fade-up" data-aos-delay="100">Skontaktuj się z nami</h2>
                <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <input type="text" name="name" placeholder="Imię i nazwisko" required onChange={handleChange} />
                    <input type="email" name="email" placeholder="Adres email" required onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Numer telefonu" onChange={handleChange} />
                    <textarea name="message" placeholder="Wiadomość..." required rows={5} onChange={handleChange}></textarea>
                    <button type="submit">Wyślij wiadomość</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
