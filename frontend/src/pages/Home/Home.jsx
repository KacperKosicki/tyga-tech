import styles from './Home.module.scss';
import Hero from '../../components/Hero/Hero';
import InfoSection from '../../components/InfoSection/InfoSection';
import MiniFAQ from '../../components/MiniFAQ/MiniFAQ';
import StatsSection from '../../components/StatsSection/StatsSection';
import HowWeWork from '../../components/HowWeWork/HowWeWork';
import Footer from '../../components/Footer/Footer'; // dodaj jeśli jeszcze nie było

const Home = () => {
  return (
    <>
      <Hero />
      <section className={styles.mainContent}>
        <InfoSection />
        <StatsSection />
        <HowWeWork />
        <MiniFAQ />
      </section>

      {/* 🔻 FALA oddzielająca sekcje */}
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,20 1440,100 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </>
  );
};

export default Home;
