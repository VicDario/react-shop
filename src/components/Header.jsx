/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';

import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';

import styles from '@styles/Header.module.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
  const { state } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles['navbar-menu']}>
          <Image src={menu} alt="menu" />
        </div>

        <div className={styles['navbar-left']}>
          <div className={styles['navbar-logo']}>
            <Link href="/">
              <a>
                <Image src={logo} alt="logo" />
              </a>
            </Link>
          </div>

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
        </div>

        <div className={styles['navbar-right']}>
          <ul>
            {state.user ? (
              <li className={styles['navbar-email']}>
                <button onClick={handleToggleMenu}>{state.user.email}</button>
              </li>
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
            <li className={styles['navbar-shopping-cart']}>
              <button onClick={() => setToggleOrders(!toggleOrders)}>
                <Image src={shoppingCart} alt="shopping cart" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
              </button>
            </li>
          </ul>
        </div>
        {showMenu && <Menu handler={handleToggleMenu} />}
        {toggleOrders && <MyOrder />}
      </nav>
    </header>
  );
};

export default Header;
