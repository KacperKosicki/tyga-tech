import styles from './Offer.module.scss';
import { FaTools, FaMagic, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.bgImageWrapper} data-aos="zoom-in">
        <img src="/images/offer.png" alt="Laser Serwis" />
      </div>

      <div className={styles.container}>
        <h2 data-aos="fade-up">Nasza oferta</h2>
        <div className={styles.grid}>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="0">
            <FaTools className={styles.icon} />
            <h3>Serwis spawarek laserowych</h3>
            <p>
              Diagnostyka, naprawy mechaniczne i optyczne, wymiana części oraz
              szkolenia z obsługi.
            </p>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
            <FaMagic className={styles.icon} />
            <h3>Serwis oczyszczarek laserowych</h3>
            <p>
              Usuwanie usterek systemów czyszczących, przeglądy, optymalizacja i konfiguracja.
            </p>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="200">
            <FaCheckCircle className={styles.icon} />
            <h3>Dlaczego my?</h3>
            <p>
              Dojazd w całej Polsce, dostęp do oryginalnych części i indywidualne podejście.
            </p>
          </div>
        </div>

        <p className={styles.contact} data-aos="fade-up" data-aos-delay="300">
          <Link to="/kontakt">Skontaktuj się z nami</Link>, aby uzyskać wycenę lub umówić serwis.
        </p>

        <p className={styles.seo} data-aos="fade-up" data-aos-delay="400">
          TYGA-TECH – profesjonalny serwis urządzeń laserowych. Działamy na terenie całej Polski, oferując naprawy, przeglądy i pełne wsparcie techniczne dla firm.
        </p>
      </div>
    </section>
  );
};

export default Offer;
