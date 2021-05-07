import React from 'react';

import { MdShoppingCart as ShoppingCart } from 'react-icons/md'
import { RiMenu2Fill as MenuIcon } from 'react-icons/ri'
import { MdSearch as SearchIcon } from 'react-icons/md'
import Logo from '../Logo'

import './styles.css'

const Menu = () => {
  return (
    <menu className="menu">
      <div className="menu-icon-wrapper">
        <MenuIcon size={24} color="#FAFAFA" />
      </div>

      <div className="menu-logo-wrapper">
        <Logo />
      </div>

      <nav className="menu-link-wrapper">
        <a href="#" className="href">Home</a>
        <a href="#" className="href">Explorer</a>
      </nav>

      <div className="menu-menu-group">
        <div className="menu-icon-wrapper">
          <SearchIcon size={24} color="#FAFAFA" />
        </div>

        <div className="menu-icon-wrapper">
          <ShoppingCart size={24} color="#FAFAFA" />
        </div>
      </div>
    </menu>
  )
}

export default Menu;