import React from "react";
import "@styles/Header.scss";

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <img src={menu} alt="menu" class="navbar-menu" />

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
            <li class="navbar-email">platzi@example.com</li>
            <li class="navbar-shopping-cart">
              <img src={shoppingCart} alt="shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
