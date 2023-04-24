import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => (
  <header className={styles.container}>
    <nav>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/beers" className={styles.link}>
        Beers
      </Link>
    </nav>
  </header>
);
