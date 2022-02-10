/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/">
            <a className={styles.title}>My orders</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.title}>My account</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.title}>Sign out</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
