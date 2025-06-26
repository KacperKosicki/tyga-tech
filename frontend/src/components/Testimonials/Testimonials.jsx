import styles from './Testimonials.module.scss';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Anna Nowak',
    role: 'Właścicielka firmy produkcyjnej',
    text: 'Profesjonalna obsługa, szybka diagnoza i skuteczna naprawa. Polecam każdemu, kto ma problemy z urządzeniem laserowym!',
  },
  {
    name: 'Tomasz Zieliński',
    role: 'Technik w branży przemysłowej',
    text: 'Świetna komunikacja i terminowość. Sprzęt działa jak nowy!',
  },
  {
    name: 'Katarzyna Wiśniewska',
    role: 'Klient indywidualny',
    text: 'Szybka reakcja i fachowa pomoc. Cieszę się, że trafiłam na tę firmę.',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 data-aos="fade-up">Co mówią nasi klienci?</h2>
        <div className={styles.cards}>
          {testimonials.map((item, i) => (
            <div className={styles.card} key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <p className={styles.text}>"{item.text}"</p>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.role}>{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
