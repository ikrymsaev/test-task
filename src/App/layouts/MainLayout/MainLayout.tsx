import { Header } from '@/modules/Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

export const MainLayout = (): JSX.Element => (
  <div>
    <Header />
    <div className={styles.content}>
      <Outlet />
    </div>
  </div>
);
