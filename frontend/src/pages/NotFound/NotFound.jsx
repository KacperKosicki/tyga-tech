import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.content}>
        <img
          src="/images/404.png"
          alt="404"
          data-aos="zoom-in"
          data-aos-delay="0"
        />
        <h2 data-aos="fade-up" data-aos-delay="150">
          Ups! Nie znaleźliśmy takiej strony.
        </h2>
        <p data-aos="fade-up" data-aos-delay="300">
          Być może została ona usunięta lub zmieniła adres.
        </p>

        {/* 🛠️ Tu AOS na wrapperze, nie na Linku */}
        <div data-aos="fade-up" data-aos-delay="500">
          <Link to="/" className={styles.button}>
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
