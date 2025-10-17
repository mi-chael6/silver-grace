import React from 'react'
import './Product_Detail.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

export default function Product_Detail() {
    return (
        <div className='productdetail-container'>
            <Header />
            <div className='productdetail-body'>
                <div className='productdetail-product'>
                    <div className='productdetail-product-images'>
                        <img className='productdetail-product-images-current' src='https://zoey.ph/cdn/shop/products/DSC02151_1600x.jpg?v=1595917032' />
                        <div className='productdetail-product-images-list'>
                            <img src='https://zoey.ph/cdn/shop/products/DSC02151_1600x.jpg?v=1595917032' />
                            <img src='https://zoey.ph/cdn/shop/products/DSC02151_1600x.jpg?v=1595917032' />
                            <img src='https://zoey.ph/cdn/shop/products/DSC02151_1600x.jpg?v=1595917032' />
                            <img src='https://zoey.ph/cdn/shop/products/DSC02151_1600x.jpg?v=1595917032' />
                        </div>
                    </div>
                    <div className='productdetail-product-details'>
                        <label className='productdetail-name'>Silver</label>
                        <label className='productdetail-price'>₱ 42</label>
                        <label className='productdetail-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas</label>
                        <div className='productdetail-actions'>
                            <div className='productdetail-actions-quant'>
                                <button>-</button>
                                <label>1</label>
                                <button>+</button>
                            </div>
                            <button className='productdetail-actions-add2cart'>ADD TO CART</button>
                            <button className='productdetail-actions-like'><img src={require('../assets/like.png')} /></button>
                        </div>
                        <label className='productdetail-ref'>SKU REF: </label>
                        <label className='productdetail-categories'>Categories: </label>
                        <label className='productdetail-tags'>Tags: </label>
                    </div>
                </div>
                <div className='productdetail-info'>
                    <label className='productdetail-info-title'>Making Shine A Happy Place</label>
                    <hr />
                    <label className='productdetail-info-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas diam. Placerat orci nulla pellentesque</label>
                    {/* <img src={require('../assets/1.webp')} /> */}
                </div>
                <div className='productdetail-customerreviews'>
                    <label className='productdetail-customerreviews-title'>Customer Reviews</label>
                    <hr className='productdetail-customerreviews-hr' />
                    <div className='productdetail-customerreviews-details'>
                        <div className='productdetail-customerreviews-cont'>
                            <div className='productdetail-customerreviews-card'>
                                <label className='productdetail-customerreviews-card-title'>Very Good Product</label>
                                <hr className='productdetail-customerreviews-card-hr' />
                                <label className='productdetail-customerreviews-card-comment'>Nibh mauris cursus mattis molestie. Non pulvinar neque laoreet suspendisse interdum consectetur libero 😍.</label>
                            </div>
                            <div className='productdetail-customerreviews-customer'>
                                <img className='productdetail-customerreviews-customer-img' src={require('../assets/user.jpg')} />
                                <div className='productdetail-customerreviews-customer-info'>
                                    <label className='customer-name'>Michael Melo</label>
                                    <label className='customer-customer'>Customer</label>
                                </div>
                            </div>
                        </div>
                        <div className='productdetail-customerreviews-cont'>
                            <div className='productdetail-customerreviews-card'>
                                <label className='productdetail-customerreviews-card-title'>Very Good Product</label>
                                <hr className='productdetail-customerreviews-card-hr' />
                                <label className='productdetail-customerreviews-card-comment'>Nibh mauris cursus mattis molestie. Non pulvinar neque laoreet suspendisse interdum consectetur libero 😍.</label>
                            </div>
                            <div className='productdetail-customerreviews-customer'>
                                <img className='productdetail-customerreviews-customer-img' src={require('../assets/user.jpg')} />
                                <div className='productdetail-customerreviews-customer-info'>
                                    <label className='customer-name'>Michael Melo</label>
                                    <label className='customer-customer'>Customer</label>
                                </div>
                            </div>
                        </div>
                        <div className='productdetail-customerreviews-cont'>
                            <div className='productdetail-customerreviews-card'>
                                <label className='productdetail-customerreviews-card-title'>Very Good Product</label>
                                <hr className='productdetail-customerreviews-card-hr' />
                                <label className='productdetail-customerreviews-card-comment'>Nibh mauris cursus mattis molestie. Non pulvinar neque laoreet suspendisse interdum consectetur libero 😍.</label>
                            </div>
                            <div className='productdetail-customerreviews-customer'>
                                <img className='productdetail-customerreviews-customer-img' src={require('../assets/user.jpg')} />
                                <div className='productdetail-customerreviews-customer-info'>
                                    <label className='customer-name'>Michael Melo</label>
                                    <label className='customer-customer'>Customer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='add-review'>ADD A REVIEW</button>
                </div>
                <div className='productdetail-relatedproduct'>
                    <label className='productdetail-relatedproduct-title'>Related Products</label>
                    <hr className='productdetail-relatedproduct-hr' />
                    <div className='productdetail-relatedproduct-cont'>
                        <div className='productdetail-relatedproduct-product'>
                            <img className='relatedproduct-img' src={require('../assets/user.jpg')} />
                            <label >name</label>
                            <label >price</label>
                        </div>
                        <div className='productdetail-relatedproduct-product'>
                            <img className='relatedproduct-img' src={require('../assets/user.jpg')} />
                            <label >name</label>
                            <label >price</label>
                        </div>
                        <div className='productdetail-relatedproduct-product'>
                            <img className='relatedproduct-img' src={require('../assets/user.jpg')} />
                            <label >name</label>
                            <label >price</label>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
