import React, { useState } from "react";

import Menu from '@components/Menu';

import "@styles/Header.scss";

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <header>
      <nav>
        <img src={menu} alt="menu" className="navbar-menu" />

        <div className="navbar-left">
          <img src={logo} alt="logo" className="navbar-logo" />

          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggleMenu}>platzi@example.com</li>
            <li className="navbar-shopping-cart">
              <img src={shoppingCart} alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
        {showMenu && <Menu />}
      </nav>
    </header>
  );
};

export default Header;
