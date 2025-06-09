import React from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.bgImageWrapper}>
        <img src="/images/undraw-team-spirit.png" alt="" className={styles.bgImage} />
      </div>

      <div className={styles.container}>
        <p>
          <strong>TYGA‑TECH Sp. z o.o.</strong> to dynamicznie rozwijająca się firma z siedzibą w Krzyżu Wielkopolskim, specjalizująca się w serwisie, naprawach i instalacjach maszyn przemysłowych. Naszym celem jest dostarczanie niezawodnych i nowoczesnych rozwiązań technicznych dla klientów z całej Polski.
        </p>

        <ul>
          <li>Naprawa, konserwacja i montaż urządzeń przemysłowych</li>
          <li>Produkcja konstrukcji i maszyn metalowych na zamówienie</li>
          <li>Obróbka mechaniczna elementów metalowych</li>
          <li>Doradztwo inżynieryjne i projektowanie techniczne</li>
          <li>Sprzedaż części zamiennych i akcesoriów</li>
        </ul>

        <div className={styles.team}>
          <h3>Zarząd firmy</h3>
          <div className={styles.members}>
            <div className={styles.member}>
              <h4>Krzysztof Remigiusz Wiza</h4>
              <p>Prezes Zarządu</p>
            </div>
            <div className={styles.member}>
              <h4>Izabela Wiza</h4>
              <p>Wspólnik</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
