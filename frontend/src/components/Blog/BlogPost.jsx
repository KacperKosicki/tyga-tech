// BlogPost.jsx
import { useParams, Link } from 'react-router-dom';
import styles from './BlogPost.module.scss';

const contentMap = {
  '1': {
    title: 'Jak dbać o urządzenia laserowe?',
    content: 'Aby dbać o urządzenia laserowe, należy regularnie je czyścić, kontrolować chłodzenie i kalibrację. Warto także unikać przegrzewania oraz wykorzystywać sprzęt zgodnie z zaleceniami producenta...',
  },
  '2': {
    title: 'Typowe usterki i jak ich unikać',
    content: 'Najczęstsze problemy to zabrudzone soczewki, uszkodzone moduły zasilania czy problemy z chłodzeniem. Unikniesz ich poprzez regularne przeglądy i korzystanie z urządzenia w odpowiednich warunkach...',
  },
  '3': {
    title: 'Dlaczego warto zlecić serwis profesjonalistom?',
    content: 'Samodzielne naprawy mogą skutkować pogorszeniem stanu urządzenia. Profesjonalny serwis to bezpieczeństwo, gwarancja i dokładna diagnostyka usterek...',
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = contentMap[id];

  if (!post) {
    return (
      <div className={styles.notFound}>
        <img src="/images/undraw-notify.png" alt="Post not found" />
        <h2>Ups! Nie znaleźliśmy takiego wpisu.</h2>
        <p>Być może został on usunięty lub zmienił adres.</p>
        <Link to="/blog" className={styles.button}>
          Wróć do bloga
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.post}>
      <div className="container">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link to="/blog" className={styles.back}>← Wróć do bloga</Link>
      </div>
    </div>
  );
};

export default BlogPost;
