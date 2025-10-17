import React from 'react'
import './Footer.css'
import '../../index.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-cont'>
        <img className='header-logo' src={require('../../assets/SILVER GRACE.png')} />
        <div className='footer-nav-cont'>
          <div className='footer-nav'>
            <label>PRODUCT</label>
            <a>Ring</a>
            <a>Bracelet</a>
            <a>Necklace</a>
            <a>Earrings</a>
          </div>
          <div className='footer-nav'>
            <label>ABOUT US</label>
            <a>Our Team</a>
            <a>Services</a>
            <a>Shop Page</a>
            <a>FAQs</a>
          </div>
          <div className='footer-nav'>
            <label>FOLLOW US</label>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Twitter</a>
            <a>Behance</a>
          </div>
        </div>
      </div>
      <label className='footer-copyright'>© 2025 Silver Grace. All rights reserved.</label>
    </div>
  )
}
