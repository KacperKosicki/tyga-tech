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
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollToNext = () => {
      const slide = container.querySelector(`.${styles.slide}`);
      if (!slide) return;

      const slideWidth = slide.offsetWidth + 16;
      indexRef.current++;

      if (indexRef.current >= images.length) {
        indexRef.current = 0;
        container.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        container.scrollTo({
          left: indexRef.current * slideWidth,
          behavior: 'smooth',
        });
      }
    };

    const startAutoScroll = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(scrollToNext, 4000);
    };

    const pauseAutoScroll = () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, 10000); // 10s bez dotyku = wznów auto-scroll
    };

    container.addEventListener('touchstart', pauseAutoScroll);
    container.addEventListener('mousedown', pauseAutoScroll);

    startAutoScroll();

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
      container.removeEventListener('touchstart', pauseAutoScroll);
      container.removeEventListener('mousedown', pauseAutoScroll);
    };
  }, []);

  return (
    <section className={styles.howWeWork}>
      <h2 className={styles.title} data-aos="fade-down" data-aos-delay="50">
        Tak pracujemy w TYGA-TECH
      </h2>
      <p className={styles.description} data-aos="fade-up" data-aos-delay="100">
        Zajrzyj za kulisy naszej pracy – proces naprawy spawarek laserowych krok po kroku.
      </p>

      <div
        className={styles.carouselWrapper}
        data-aos="fade-up"
        data-aos-delay="150"
      >
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
