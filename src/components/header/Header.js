import React, { useState, useEffect } from 'react';
import './Header.css'
import '../../index.css'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const quant = JSON.parse(localStorage.getItem('cart'))

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
        <button className='header-cart-btn' onClick={() => navigate('/cart')}>CART ({quant ? quant.length : 0})</button>

      </div>
    </div>

  )
}
