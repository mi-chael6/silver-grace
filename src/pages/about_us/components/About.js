import React from 'react'
import './About.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

export default function About() {
  return (
    <div className='about-container'>
      <Header />

      <div className='about-content'>
        <h1>About Silver Grace</h1>
        <p className='about-intro'>
          Silver Grace is a modern beauty and wellness brand dedicated to empowering individuals
          through high-quality, science-backed, and ethically produced products. Our journey began
          with a simple belief — that true beauty shines brightest when it comes from confidence,
          care, and compassion.
        </p>

        <div className='about-section'>
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Silver Grace emerged from a shared passion for redefining beauty
            standards. What started as a small line of handcrafted skincare products has now grown
            into a trusted name in wellness and cosmetics, reaching communities across the country.
            Every product we create is designed to enhance your natural beauty while promoting
            sustainability and self-love.
          </p>
        </div>

        <div className='about-section'>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide safe, effective, and affordable beauty solutions that nurture
            both body and mind. We believe that everyone deserves to feel beautiful and confident in
            their own skin. That’s why we prioritize cruelty-free testing, eco-friendly packaging,
            and natural ingredients in every formulation we make.
          </p>
        </div>

        <div className='about-section'>
          <h2>What We Stand For</h2>
          <ul>
            <li><strong>Quality:</strong> We use only the finest ingredients and the latest innovations in skincare and cosmetics.</li>
            <li><strong>Integrity:</strong> Transparency and honesty are at the heart of everything we do.</li>
            <li><strong>Sustainability:</strong> Our packaging and production processes are designed to minimize environmental impact.</li>
            <li><strong>Empowerment:</strong> We aim to help every individual embrace their unique beauty and strength.</li>
          </ul>
        </div>

        <div className='about-section'>
          <h2>Looking Ahead</h2>
          <p>
            As we continue to grow, Silver Grace remains committed to its core values — innovation,
            compassion, and authenticity. We envision a future where beauty and sustainability go
            hand in hand, and where every person can express themselves with confidence and grace.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
