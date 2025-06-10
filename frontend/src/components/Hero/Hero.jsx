import styles from './Hero.module.scss';
import { Link } from 'react-router-dom';
import { FaTools, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left} data-aos="fade-right">
          <h1>SERWIS URZĄDZEŃ LASEROWYCH</h1>
          <p>Naprawa, wsparcie techniczne i konserwacja urządzeń laserowych w całej Polsce.</p>

          <div className={styles.buttons}>
            <Link to="/zgloszenie" className={styles.cta}>
              <FaTools /> Zgłoś usterkę
            </Link>
            <Link to="/kontakt" className={styles.secondary}>
              <FaEnvelope /> Skontaktuj się
            </Link>
          </div>
        </div>

        <div className={styles.right} data-aos="fade-left">
          <img src="/images/hero-image.png" alt="Laser Illustration" />
        </div>

      </div>

      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,20 1440,100 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
