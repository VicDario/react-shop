/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = ({ handler }) => {
  const { signOut } = useContext(AppContext);
  const handleSignOut = () => {
    signOut();
    handler();
  };
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/">
            <a>My orders</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>My account</a>
          </Link>
        </li>
        <li>
          <button onClick={handleSignOut}>Sign out</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
