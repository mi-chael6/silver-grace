import React from 'react'
import './Header.css'
import '../../index.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <img className='header-logo' src={require('../../assets/SILVER GRACE.png')} />
      <div className='header-nav'>
        <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to='/shop' className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
      </div>
      <div className='header-actions'>
        <img className='header-icon' src={require('../../assets/user.png')} />
        <button className='header-cart-btn'>CART</button>
      </div>
    </div>

  )
}
