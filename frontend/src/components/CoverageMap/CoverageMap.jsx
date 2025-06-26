import styles from './CoverageMap.module.scss';
import { FaWrench } from 'react-icons/fa';

const CoverageMap = () => {
    return (
        <section className={styles.coverage}>
            <div className={styles.container}>
                <h2 data-aos="fade-up">Działamy na terenie całej Polski</h2>
                <p data-aos="fade-up" data-aos-delay="150">
                    Niezależnie od lokalizacji – oferujemy serwis, naprawy i doradztwo w całym kraju. Obsługujemy firmy i klientów indywidualnych.
                </p>

                <div className={styles.mapWrapper} data-aos="zoom-in" data-aos-delay="300">
                    <div className={styles.map}>
                        <img src="/images/poland-map.png" alt="Mapa Polski" />
                        <FaWrench className={styles.szczecin} />
                        <FaWrench className={styles.gdansk} />
                        <FaWrench className={styles.bialystok} />
                        <FaWrench className={styles.bydgoszcz} />
                        <FaWrench className={styles.wroclaw} />
                        <FaWrench className={styles.katowice} />
                        <FaWrench className={styles.lublin} />
                        <FaWrench className={styles.lodz} />
                        <FaWrench className={styles.poznan} />
                        <FaWrench className={styles.warsaw} />
                        <FaWrench className={styles.krakow} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoverageMap;
