import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/tyga-tech-logo-white.png" alt="TYGA-TECH Logo" />
        </div>

        <button className={styles.burger} onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Strona Główna</Link></li>
          <li><Link to="/oferta" onClick={closeMenu}>Oferta</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/kontakt" onClick={closeMenu}>Kontakt</Link></li>
          <li><Link to="/zgloszenie" onClick={closeMenu}>Zgłoś usterkę</Link></li> {/* ⬅️ NOWY LINK */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
