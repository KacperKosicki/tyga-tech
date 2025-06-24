import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import sanityClient from '../../lib/sanityClient';
import { PortableText } from '@portabletext/react';
import styles from './BlogPost.module.scss';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post" && slug.current == $slug][0]{
        title,
        date,
        excerpt,
        tags,
        "image": image.asset->url,
        body
      }`, { slug })
      .then(setPost)
      .catch(console.error);
  }, [slug]);

  if (post === null) {
    return (
      <section className={styles.notFound}>
        <div className={styles.content}>
          <img
            src="/images/404.png"
            alt="Post not found"
            data-aos="zoom-in"
            data-aos-delay="0"
          />
          <h2 data-aos="fade-up" data-aos-delay="150">
            Ups! Nie znaleźliśmy takiego posta.
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
            Być może został usunięty lub zmienił adres.
          </p>
          <Link
            to="/blog"
            className={styles.button}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Wróć do bloga
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.blogPost}>
      <div className="container">
        <Link
          to="/blog"
          className={styles.backLink}
          data-aos="fade-right"
          data-aos-delay="100"
        >
          ← Wróć do bloga
        </Link>

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {post.title}
        </h1>

        <p
          className={styles.date}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {post.date
            ? new Date(post.date).toLocaleDateString('pl-PL')
            : 'Brak daty publikacji'}
        </p>

        {post.tags && (
          <ul
            className={styles.tags}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {post.tags.map((tag, i) => <li key={i}>🏷️ {tag}</li>)}
          </ul>
        )}

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className={styles.mainImage}
            data-aos="zoom-in"
            data-aos-delay="500"
          />
        )}

        <div
          className={styles.body}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <PortableText value={post.body} />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
