import React from 'react';
import styles from './AboutUs.module.scss';

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
          <li>Diagnostyka, naprawa i konserwacja spawarek laserowych</li>
          <li>Serwis i optymalizacja pracy oczyszczarek laserowych</li>
          <li>Wymiana podzespołów, kalibracja i testy wydajności</li>
          <li>Doradztwo techniczne i wsparcie wdrożeniowe</li>
          <li>Dostawa części zamiennych i akcesoriów do urządzeń laserowych</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
