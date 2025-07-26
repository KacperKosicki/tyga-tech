import styles from './CTA.module.scss';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Masz pytania lub potrzebujesz szybkiej naprawy?</h2>
          <p>
            Jesteśmy dostępni w całej Polsce. Zadzwoń lub napisz do nas — działamy błyskawicznie!
          </p>
          <a href="tel:501580715" className={styles.phone}>
            <FaPhoneAlt /> 603 877 097
          </a>
        </div>
        <div className={styles.right}>
          <Link to="/kontakt" className={styles.button}>
            <FaEnvelope /> Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
