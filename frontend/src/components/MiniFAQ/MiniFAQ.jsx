import { useState } from 'react';
import styles from './MiniFAQ.module.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'Jak szybko reagujecie na zgłoszenie?',
    answer: 'Najczęściej jeszcze tego samego dnia roboczego.',
  },
  {
    question: 'Czy działacie w całej Polsce?',
    answer: 'Tak, oferujemy wsparcie na terenie całego kraju.',
  },
  {
    question: 'Jakie urządzenia naprawiacie?',
    answer:
      'Specjalizujemy się w serwisie spawarek laserowych oraz oczyszczarek laserowych.',
  },
];

const MiniFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 data-aos="fade-up">Najczęstsze pytania</h2>

        <ul className={styles.faqList}>
          {faqs.map((faq, i) => (
            <li
              key={i}
              className={`${styles.faqItem} ${openIndex === i ? styles.open : ''}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className={styles.question}>
                <span>{faq.question}</span>
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openIndex === i && (
                <div className={styles.answer}>{faq.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MiniFAQ;
