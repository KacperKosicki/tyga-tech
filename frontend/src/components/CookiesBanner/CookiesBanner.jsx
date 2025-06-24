import { useEffect, useState } from 'react';
import styles from './CookiesBanner.module.scss';

const CookiesBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie
      .split('; ')
      .find((row) => row.startsWith('cookiesAccepted='));
    if (!cookiesAccepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const expiry = new Date();
    expiry.setFullYear(expiry.getFullYear() + 1); // ważne 1 rok
    document.cookie = `cookiesAccepted=true; path=/; expires=${expiry.toUTCString()}`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Ta strona używa plików cookies w celach technicznych oraz – po zgodzie –
        analitycznych. Korzystając z niej, akceptujesz zapisywanie cookies.
      </p>
      <button onClick={handleAccept}>Akceptuję</button>
    </div>
  );
};

export default CookiesBanner;
