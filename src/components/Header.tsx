import styles from './Header.module.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header className={styles.container}>
        <Link to="/" style={{ cursor: 'pointer' }}>
            <img src={logo} alt="logo criptomoedas" />
        </Link>
    </header>
  )
}