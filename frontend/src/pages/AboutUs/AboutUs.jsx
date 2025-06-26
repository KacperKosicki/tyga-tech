import React from 'react';
import styles from './AboutUs.module.scss';
import { FaWrench } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div
        className={styles.bgImageWrapper}
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <img src="/images/about-us.png" alt="" className={styles.bgImage} />
      </div>

      <div className={styles.container}>
        <p data-aos="fade-up" data-aos-delay="0">
          <strong>TYGA‑TECH Sp. z o.o.</strong> to dynamicznie rozwijająca się firma z siedzibą w <strong>Krzyżu Wielkopolskim</strong>, specjalizująca się w <strong>serwisie spawarek laserowych oraz oczyszczarek laserowych</strong>. Świadczymy kompleksowe usługi techniczne dla firm z <strong>całej Polski</strong>, zapewniając szybkie i fachowe wsparcie.
        </p>

        <ul data-aos="fade-up" data-aos-delay="100">
          {[
            'Diagnostyka, naprawa i konserwacja spawarek laserowych',
            'Serwis i optymalizacja pracy oczyszczarek laserowych',
            'Wymiana podzespołów, kalibracja i testy wydajności',
            'Doradztwo techniczne i wsparcie wdrożeniowe',
            'Dostawa części zamiennych i akcesoriów do urządzeń laserowych',
          ].map((text, i) => (
            <li key={i}>
              <FaWrench className={styles.icon} />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
