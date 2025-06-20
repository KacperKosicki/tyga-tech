import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../lib/sanityClient';
import styles from './Blog.module.scss';

const isNewPost = (postDate, days = 7) => {
  const now = new Date();
  const post = new Date(postDate);
  const diffTime = now - post;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays < days;
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(date desc) {
        _id,
        title,
        slug,
        excerpt,
        date,
        tags,
        "image": image.asset->url
      }`)
      .then(setBlogPosts)
      .catch(console.error);
  }, []);

  const tagCounts = blogPosts.reduce((acc, post) => {
    post.tags?.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const allTags = Object.keys(tagCounts);

  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags?.includes(selectedTag))
    : blogPosts;

  return (
    <section className={styles.blog}>
      <div className={styles.bgImageWrapper} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
        <img src="/images/undraw-mobile-payments.png" alt="" />
      </div>
      <div className="container">
        <div className={styles.layout}>
          <aside className={styles.sidebar} data-aos="fade-right">
            <ul>
              <li className={!selectedTag ? styles.active : ''} onClick={() => setSelectedTag(null)}>
                Wszystkie posty ({blogPosts.length})
              </li>
              <h3>Tagi</h3>
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
                key={post._id}
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                {isNewPost(post.date) && (
                  <div className={styles.fakeBadge}>NOWY POST!</div>
                )}
                <div className={styles.imageWrapper}>
                  <img src={post.image || '/images/placeholder.jpg'} alt={post.title} />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span>
                      {post.date
                        ? new Date(post.date).toLocaleDateString('pl-PL')
                        : 'Brak daty'}
                    </span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>

                  <ul className={styles.tags}>
                    {post.tags?.map((tag, i) => (
                      <li key={i}>
                        <span>🏷️</span> {tag}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.separator}></div>
                  <Link to={`/blog/${post.slug?.current}`} className={styles.button}>
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
