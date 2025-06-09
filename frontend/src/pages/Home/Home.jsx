import styles from './Home.module.scss';
import Hero from '../../components/Hero/Hero';
import InfoSection from '../../components/InfoSection/InfoSection';
import MiniFAQ from '../../components/MiniFAQ/MiniFAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <section className={styles.mainContent}>
        <InfoSection />
        <MiniFAQ />
      </section>
    </>
  );
};

export default Home;
