import React from 'react';

import './styles.css'

import logo from '../../assets/Logo.svg'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo}/>
    </div>
  )
}

export default Logo;