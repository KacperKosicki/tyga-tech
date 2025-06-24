import styles from './Offer.module.scss';
import { FaTools, FaMagic, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.bgImageWrapper}>
        <img src="/images/offer.png" alt="Laser Serwis" />
      </div>

      <div className={styles.container}>
        <h2>Nasza oferta</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <FaTools className={styles.icon} />
            <h3>Serwis spawarek laserowych</h3>
            <p>
              Diagnostyka, naprawy mechaniczne i optyczne, wymiana części oraz
              szkolenia z obsługi.
            </p>
          </div>

          <div className={styles.card}>
            <FaMagic className={styles.icon} />
            <h3>Serwis oczyszczarek laserowych</h3>
            <p>
              Usuwanie usterek systemów czyszczących, przeglądy, optymalizacja i konfiguracja.
            </p>
          </div>

          <div className={styles.card}>
            <FaCheckCircle className={styles.icon} />
            <h3>Dlaczego my?</h3>
            <p>
              Dojazd w całej Polsce, dostęp do oryginalnych części i indywidualne podejście.
            </p>
          </div>
        </div>

        <p className={styles.contact}>
          <Link to="/kontakt">Skontaktuj się z nami</Link>, aby uzyskać wycenę lub umówić serwis.
        </p>

        <p className={styles.seo}>
          TYGA-TECH – profesjonalny serwis urządzeń laserowych. Działamy na terenie całej Polski, oferując naprawy, przeglądy i pełne wsparcie techniczne dla firm.
        </p>
      </div>
    </section>
  );
};

export default Offer;
