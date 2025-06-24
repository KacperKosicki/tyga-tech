import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logoSection}>
          <img src="/images/tyga-tech-logo-white.png" alt="TYGA-TECH" className={styles.logo} />
          <p>
            Serwis urządzeń laserowych – precyzja, doświadczenie i działanie w całej Polsce.
          </p>
        </div>

        <div className={styles.links}>
          <h4>Menu</h4>
          <nav>
            <Link to="/">Strona główna</Link>
            <Link to="/zgloszenie">Zgłoś usterkę</Link>
            <Link to="/o-nas">O nas</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>
        </div>

        <div className={styles.contact}>
          <h4>Kontakt</h4>
          <ul>
            <li><FaMapMarkerAlt /> ul. Warsztatowa 13, Krzyż Wlkp.</li>
            <li><FaPhoneAlt /> 603-877-097</li>
            <li><FaEnvelope /> kontakt@tyga-tech.pl</li>
          </ul>
          <div className={styles.socials}>
            <a href="https://facebook.com/tyga.tech.serwis.urzadzen.laserowych" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} TYGA-TECH. Wszelkie prawa zastrzeżone.{' '}
          <span className={styles.separator}>|</span>{' '}
          Strona zaprojektowana przez{' '}
          <a
            href="https://kacper-kosicki.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            kacper-kosicki.pl
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
