import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <section className={styles.notFound}>
            <div className={styles.content}>
                <img src="/images/undraw-page-not-found.png" alt="404" />
                <p>Ups! Nie znaleźliśmy takiej strony.</p>
                <Link to="/" className={styles.button}>Wróć na stronę główną</Link>
            </div>
        </section>
    );
};

export default NotFound;
