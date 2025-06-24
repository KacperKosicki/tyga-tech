import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <section className={styles.privacy}>
      <div className={styles.container}>
        <h1>Polityka Prywatności</h1>

        <p><strong>Data ostatniej aktualizacji: 24 czerwca 2025</strong></p>

        <h2>1. Administrator danych</h2>
        <p>
          Administratorem danych osobowych jest TYGA-TECH Sp. z o.o. z siedzibą przy ul. Warsztatowa 13,
          64-761 Krzyż Wielkopolski, NIP: 7632153730, REGON: 529423120.
          Kontakt: <a href="mailto:kw.tygatech@gmail.com">kw.tygatech@gmail.com</a>, tel. +48 603 877 097.
        </p>

        <h2>2. Jakie dane zbieramy?</h2>
        <p>Za pośrednictwem strony zbierane są dane poprzez dwa formularze:</p>

        <h3>Formularz kontaktowy</h3>
        <ul>
          <li>Imię i nazwisko</li>
          <li>Adres e-mail</li>
          <li>Numer telefonu</li>
          <li>Treść wiadomości</li>
        </ul>

        <h3>Formularz zgłoszenia usterki</h3>
        <ul>
          <li>Imię i nazwisko</li>
          <li>Nazwa firmy (opcjonalnie)</li>
          <li>Numer telefonu</li>
          <li>Adres e-mail</li>
          <li>Model maszyny</li>
          <li>Opis usterki</li>
          <li>Załączone zdjęcie (opcjonalnie)</li>
        </ul>

        <h2>3. Cel i podstawa przetwarzania danych</h2>
        <p>Dane przetwarzane są w celu:</p>
        <ul>
          <li>udzielenia odpowiedzi na zapytanie (formularz kontaktowy) – podstawa: art. 6 ust. 1 lit. f RODO</li>
          <li>realizacji zgłoszenia serwisowego (formularz zgłoszeniowy) – podstawa: art. 6 ust. 1 lit. b RODO</li>
        </ul>

        <h2>4. Okres przechowywania danych</h2>
        <p>
          Dane będą przechowywane przez czas niezbędny do realizacji celu, maksymalnie przez 3 lata od zakończenia
          kontaktu lub wykonania usługi.
        </p>

        <h2>5. Prawa osoby, której dane dotyczą</h2>
        <p>Masz prawo do:</p>
        <ul>
          <li>dostępu do swoich danych i ich kopii</li>
          <li>sprostowania danych</li>
          <li>usunięcia danych („prawo do bycia zapomnianym”)</li>
          <li>ograniczenia przetwarzania</li>
          <li>przenoszenia danych</li>
          <li>sprzeciwu wobec przetwarzania</li>
          <li>wniesienia skargi do Prezesa UODO</li>
        </ul>

        <h2>6. Cookies</h2>
        <p>
          Strona korzysta z plików cookies w celach technicznych (niezbędnych do działania strony),
          funkcjonalnych oraz – po uzyskaniu zgody – analitycznych (np. Google Analytics).
        </p>
        <p>
          Użytkownik może zarządzać plikami cookies z poziomu przeglądarki lub poprzez baner cookies wyświetlany przy pierwszej wizycie.
        </p>

        <h2>7. Przekazywanie danych</h2>
        <p>
          Dane mogą być przekazywane podmiotom przetwarzającym dane w imieniu administratora (np. firma hostingowa),
          na podstawie stosownych umów powierzenia. Dane nie są przekazywane poza Europejski Obszar Gospodarczy.
        </p>

        <h2>8. Zmiany w polityce</h2>
        <p>
          Administrator zastrzega sobie prawo do aktualizacji niniejszej Polityki Prywatności. Nowe wersje będą publikowane na tej stronie.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
