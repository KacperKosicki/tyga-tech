import styles from './Home.module.scss';
import Hero from '../../components/Hero/Hero';
import InfoSection from '../../components/InfoSection/InfoSection';
import MiniFAQ from '../../components/MiniFAQ/MiniFAQ';
import StatsSection from '../../components/StatsSection/StatsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <section className={styles.mainContent}>
        <InfoSection />
        <StatsSection />
        <MiniFAQ />
      </section>
    </>
  );
};

export default Home;
