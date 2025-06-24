import { useEffect, useRef } from 'react';
import styles from './HowWeWork.module.scss';

const images = [
  '/howwework/howwework-1.jpg',
  '/howwework/howwework-2.jpg',
  '/howwework/howwework-3.jpg',
  '/howwework/howwework-4.jpg',
  '/howwework/howwework-5.jpg',
  '/howwework/howwework-6.jpg',
  '/howwework/howwework-7.jpg',
  '/howwework/howwework-8.jpg',
];

const HowWeWork = () => {
  const carouselRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const slide = container.querySelector(`.${styles.slide}`);
      if (!slide) return;

      const slideWidth = slide.offsetWidth + 16; // +gap
      index++;

      if (index >= images.length) {
        index = 0;
        container.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        container.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.howWeWork}>
      <h2 className={styles.title}>Tak pracujemy w TYGA-TECH</h2>
      <p className={styles.description}>
        Zajrzyj za kulisy naszej pracy – proces naprawy spawarek laserowych krok po kroku.
      </p>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={carouselRef}>
          {images.map((img, i) => (
            <div className={styles.slide} key={i}>
              <img src={img} alt={`Krok ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
