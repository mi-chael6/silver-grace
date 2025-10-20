import React from 'react'
import './Homepage.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

export default function Homepage() {
  return (
    <div className='homepage-container'>
      <Header />
      <div className='homepage-body'>
        <div className='homepage-hero'>
          <label className='homepage-hero-text'>
            <img className='homepage-hero-text-img' src={require('../assets/3.jpg')} />
            THE ELEMENT THAT ENHANCES THE BEAUTY OF YOUR BODY
            <img className='homepage-hero-text-img' src={require('../assets/2.jpeg')} />
          </label>

          <div className='homepage-hero-img-container'>
            <img className='homepage-hero-img' src={require('../assets/learn.png')} />
            <a href='/about' className='homepage-hero-img-text'>LEARN MORE</a>
          </div>
        </div>

        <img className='homepage-body-img' src={require('../assets/1.jpg')} alt='' />
        <label className='homepage-body-text'>OUR PRODUCT</label>
        <div className='homepage-nav'>
          <div className='homepage-nav-cont'>
            <img className='homepage-nav-img' src={require('../assets/8.jpg')} alt='' />
            <span className='homepage-nav-text'>Our Philosophy</span>
          </div>
          <div className='homepage-nav-cont'>
            <img className='homepage-nav-img' src={require('../assets/9.jpg')} alt='' />
            <span className='homepage-nav-text'>Starting Projects</span>
          </div>
          <div className='homepage-nav-cont'>
            <img className='homepage-nav-img' src={require('../assets/6.jpg')} alt='' />
            <span className='homepage-nav-text'>Function and Beauty</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
