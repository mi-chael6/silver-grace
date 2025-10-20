import React from 'react'
import './Contact.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

export default function Contact() {
    return (
        <div className='contact-container'>
            <Header />

            <div className='contact-content'>
                <h1>Contact Us</h1>
                <p className='contact-description'>
                    Have questions or inquiries? We'd love to hear from you. Fill out the form below or reach us directly through our contact information.
                </p>
                <div className='contact-info'>
                    <div>
                        <h3>Email</h3>
                        <p>silvergrace@gmail.com</p>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <p>+63 912 345 6789</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>123 Silver Grace St., Pasay City, Philippines</p>
                    </div>
                </div>
                <form className='contact-form'>
                    <input type='text' placeholder='Your Name' required />
                    <input type='email' placeholder='Your Email' required />
                    <textarea placeholder='Your Message' required></textarea>
                    <button type='submit'>Send  Message</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
