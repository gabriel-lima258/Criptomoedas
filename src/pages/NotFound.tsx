import { Link } from 'react-router';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Página Não Encontrada</h2>
        <p className={styles.message}>
          Ops! Parece que essa criptomoeda não existe ou a página que você está procurando foi movida.
        </p>
        <Link to="/" className={styles.button}>
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}