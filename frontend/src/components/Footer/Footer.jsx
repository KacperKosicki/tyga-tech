import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <img src="/images/tyga-tech-logo-white.png" alt="TYGA-TECH Logo" className={styles.logo} />
          <p className={styles.description}>
            Profesjonalny serwis urządzeń laserowych na terenie całej Polski. Gwarancja jakości i precyzji.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Linki</h4>
          <nav className={styles.links}>
            <Link to="/">Strona Główna</Link>
            <Link to="/oferta">Oferta</Link>
            <Link to="/zgloszenie">Zgłoś usterkę</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>
        </div>

        <div className={styles.column}>
          <h4>Kontakt</h4>
          <ul className={styles.contactInfo}>
            <li><FaMapMarkerAlt /> ul. Warsztatowa 13, Krzyż Wielkopolski</li>
            <li><FaPhone /> 603-877-097</li>
            <li><FaEnvelope /> kontakt@tyga-tech.pl</li>
          </ul>
          <div className={styles.socials}>
            <a href="https://facebook.com/tyga.tech.serwis.urzadzen.laserowych" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          title="Lokalizacja TYGA-TECH"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.3971964472146!2d16.016731515796774!3d52.87770787987133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705a2ef2c0f1c85%3A0x99ed93b6b2b5d0b6!2sWarsztatowa%2013%2C%2064-761%20Krzy%C5%BC%20Wielkopolski!5e0!3m2!1spl!2spl!4v1717687200000"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} TYGA-TECH. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
