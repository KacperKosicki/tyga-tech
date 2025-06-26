import styles from './Home.module.scss';
import Hero from '../../components/Hero/Hero';
import InfoSection from '../../components/InfoSection/InfoSection';
import MiniFAQ from '../../components/MiniFAQ/MiniFAQ';
import StatsSection from '../../components/StatsSection/StatsSection';
import HowWeWork from '../../components/HowWeWork/HowWeWork';
import CTA from '../../components/CTA/CTA';
import CoverageMap from '../../components/CoverageMap/CoverageMap';

const Home = () => {
  return (
    <>
      <Hero />
      <section className={styles.mainContent}>
        <InfoSection />
        <StatsSection />
        <HowWeWork />
        <CoverageMap />
        <CTA />
        <MiniFAQ />
      </section>
    </>
  );
};

export default Home;
