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
                <h2 data-aos="fade-up" data-aos-delay="150">Ups! Nie znaleźliśmy takiej strony.</h2>
                <p data-aos="fade-up" data-aos-delay="300">
                    Być może została ona usunięta lub zmieniła adres.
                </p>
                <Link
                    to="/"
                    className={styles.button}
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    Wróć na stronę główną
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
