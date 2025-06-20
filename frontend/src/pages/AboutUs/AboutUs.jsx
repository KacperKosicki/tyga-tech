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
        <img src="/images/undraw-team-spirit.png" alt="" className={styles.bgImage} />
      </div>

      <div className={styles.container}>
        <p data-aos="fade-up" data-aos-delay="0">
          <strong>TYGA‑TECH Sp. z o.o.</strong> to dynamicznie rozwijająca się firma z siedzibą w Krzyżu Wielkopolskim, specjalizująca się w serwisie, naprawach i instalacjach maszyn przemysłowych. Naszym celem jest dostarczanie niezawodnych i nowoczesnych rozwiązań technicznych dla klientów z całej Polski.
        </p>

        <ul data-aos="fade-up" data-aos-delay="100">
          <li>Naprawa, konserwacja i montaż urządzeń przemysłowych</li>
          <li>Produkcja konstrukcji i maszyn metalowych na zamówienie</li>
          <li>Obróbka mechaniczna elementów metalowych</li>
          <li>Doradztwo inżynieryjne i projektowanie techniczne</li>
          <li>Sprzedaż części zamiennych i akcesoriów</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
