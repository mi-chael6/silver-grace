import React from 'react';
import './Header.css';
import '../../index.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  let cart = [];
  try {
    const stored = localStorage.getItem('cart');
    cart = stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to parse cart:', error);
    cart = [];
  }

  return (
    <div className='header'>
      <img
        className='header-logo'
        src={require('../../assets/SILVER GRACE.png')}
        alt='Silver Grace Logo'
      />
      <div className='header-nav'>
        <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to='/shop' className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
      </div>
      <div className='header-actions'>
        <img
          className='header-icon'
          src={require('../../assets/user.png')}
          alt='User Icon'
        />
        <button className='header-cart-btn' onClick={() => navigate('/cart')}>
          CART ({cart.length})
        </button>
      </div>
    </div>
  );
}
