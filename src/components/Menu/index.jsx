import React from 'react';

import { MdShoppingCart as ShoppingCart } from 'react-icons/md'
import { RiMenu2Fill as MenuIcon } from 'react-icons/ri'
import { MdSearch as SearchIcon } from 'react-icons/md'
import Logo from '../Logo'

import './styles.css'

const Menu = () => {
  return (
    <menu className="menu">
      <a href="https://store.steampowered.com/curators/" target="_blank" className="menu-icon-wrapper">
        <MenuIcon size={24} color="#FAFAFA" />
      </a>

      <div className="menu-logo-wrapper">
        <Logo />
      </div>

      <nav className="menu-link-wrapper">
        <a href="https://store.steampowered.com/" target="_blank" className="href">Home</a>
        <a href="https://store.steampowered.com/communityrecommendations/" target="_blank" className="href">Explorer</a>
      </nav>

      <div className="menu-menu-group">
        <a href="https://store.steampowered.com/search" target="_blank" className="menu-icon-wrapper">
          <SearchIcon size={24} color="#FAFAFA" />
        </a>

        <a href="https://store.steampowered.com/cart/" target="_blank" className="menu-icon-wrapper">
          <ShoppingCart size={24} color="#FAFAFA" />
        </a>
      </div>
    </menu>
  )
}

export default Menu;
