import styles from './Home.module.scss';
import Hero from '../../components/Hero/Hero';
import InfoSection from '../../components/InfoSection/InfoSection';

const Home = () => {
  return (
    <>
      <Hero />
      <section className={styles.mainContent}>
        <InfoSection />
        {/* tutaj możesz dołożyć kolejne sekcje, np. <Oferta /> */}
      </section>
    </>
  );
};

export default Home;
