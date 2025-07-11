import styles from './InfoSection.module.scss';
import { FaTools, FaHeadset, FaMapMarkerAlt } from 'react-icons/fa';

const InfoSection = () => {
  return (
    <section className={styles.info}>
      <div className={styles.bgImageWrapper} data-aos="fade-left" data-aos-delay="150">
        <img src="/images/why-us.png" alt="" />
      </div>

      <div className={styles.container}>
        <h2 data-aos="fade-down" data-aos-delay="50">Dlaczego warto wybrać TYGA-TECH?</h2>
        <div className={styles.grid}>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="0">
            <FaTools className={styles.icon} />
            <h3>Fachowa diagnostyka</h3>
            <p>Precyzyjna analiza usterek i skuteczne rozwiązania dla każdego typu urządzenia laserowego.</p>
          </div>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="150">
            <FaHeadset className={styles.icon} />
            <h3>Wsparcie techniczne</h3>
            <p>Szybka pomoc, doradztwo oraz możliwość konsultacji z ekspertami w branży.</p>
          </div>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="300">
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Działamy w całej Polsce</h3>
            <p>Świadczymy usługi serwisowe w każdym zakątku kraju – bez względu na lokalizację.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
