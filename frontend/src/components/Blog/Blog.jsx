import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.scss';

const blogPosts = [
  {
    id: '1',
    title: 'Jak dbać o urządzenia laserowe?',
    excerpt: 'Poznaj najlepsze praktyki konserwacji i przedłuż żywotność swojego sprzętu.',
    image: '/blog/blog-1.jpg',
    tags: ['konserwacja', 'laser', 'porady'],
    date: '2025-06-10',
  },
  {
    id: '2',
    title: 'Typowe usterki i jak ich unikać',
    excerpt: 'Dowiedz się, które awarie są najczęstsze i co możesz zrobić, by ich uniknąć.',
    image: '/blog/blog-2.jpg',
    tags: ['usterki', 'diagnostyka'],
    date: '2025-06-09',
  },
  {
    id: '3',
    title: 'Dlaczego warto zlecić serwis profesjonalistom?',
    excerpt: 'Samodzielne naprawy mogą pogorszyć stan sprzętu – sprawdź, dlaczego warto zaufać ekspertom.',
    image: '/blog/blog-3.jpg',
    tags: ['serwis', 'eksperci'],
    date: '2025-06-02',
  },
  {
    id: '4',
    title: '5 sygnałów, że czas na przegląd maszyny',
    excerpt: 'Nie ignoruj tych objawów – mogą prowadzić do poważnych awarii. Sprawdź, kiedy reagować.',
    image: '/blog/blog-4.jpg',
    tags: ['przegląd', 'awarie', 'serwis'],
    date: '2025-06-08',
  },

];

const isNewPost = (postDate, days = 7) => {
  const now = new Date();
  const post = new Date(postDate);
  const diffTime = now - post;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays < days;
};

const tagCounts = blogPosts.reduce((acc, post) => {
  post.tags.forEach(tag => {
    acc[tag] = (acc[tag] || 0) + 1;
  });
  return acc;
}, {});

const allTags = Object.keys(tagCounts);

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <section className={styles.blog}>
      <div
        className={styles.bgImageWrapper}
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <img src="/images/undraw-mobile-payments.png" alt="" />
      </div>
      <div className="container">
        <div className={styles.layout}>
          <aside className={styles.sidebar} data-aos="fade-right">
            <h3>Tagi</h3>
            <ul>
              <li
                className={!selectedTag ? styles.active : ''}
                onClick={() => setSelectedTag(null)}
              >
                Wszystkie ({blogPosts.length})
              </li>
              {allTags.map((tag) => (
                <li
                  key={tag}
                  className={selectedTag === tag ? styles.active : ''}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag} ({tagCounts[tag]})
                </li>
              ))}
            </ul>
          </aside>
          <div className={styles.grid}>
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                {isNewPost(post.date) && (
                  <div className={styles.fakeBadge}>NOWY POST!</div>
                )}
                <div className={styles.imageWrapper}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>

                  <ul className={styles.tags}>
                    {post.tags.map((tag, i) => (
                      <li key={i}>
                        <span>🏷️</span> {tag}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.separator}></div>
                  <Link to={`/blog/${post.id}`} className={styles.button}>
                    Czytaj więcej...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
