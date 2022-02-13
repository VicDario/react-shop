/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Link from 'next/link';
import styles from '@styles/MenuResponsive.module.scss';

const MenuResponsive = ({ handler }) => {
  const { state, signOut } = useContext(AppContext);
  const handleSignOut = () => {
    signOut();
    handler();
  };
  return (
    <div className={styles['mobile-menu']}>
      <ul>
        <li>
          <Link href="/">
            <a>All</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Clothes</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Electronics</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Furnitures</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Toys</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Others</a>
          </Link>
        </li>
      </ul>
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
      </ul>
      <ul>
        {state.user ? (
          <>
            <li className={styles['navbar-email']}>{state.user.email}</li>
            <button onClick={handleSignOut} className={styles['sign-out']}>
              Sign out
            </button>
          </>
        ) : (
          <>
            <li className={styles['sign-up']}>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li className={styles['sign-up']}>
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default MenuResponsive;
