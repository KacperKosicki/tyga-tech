import CountUp from 'react-countup';
import styles from './StatsSection.module.scss';

const StatsSection = () => {
  const stats = [
    { value: 500, label: 'Naprawionych urządzeń' },
    { value: 1, label: 'Lat doświadczenia' },
    { value: 24, label: 'Czas reakcji (h)' },
    { value: 100, label: 'Zadowolonych klientów' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {stats.map((s, i) => (
          <div
            key={i}
            className={styles.stat}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <h3>
              <CountUp end={s.value} duration={2} />
              {s.value === 100 ? '%' : '+'}
            </h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
