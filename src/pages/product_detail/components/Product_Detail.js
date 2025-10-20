import React, { useState, useEffect } from 'react';
import './Product_Detail.css';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import { useLocation, useNavigate } from "react-router-dom";
import products from '../../../products/Products';

export default function Product_Detail() {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state.product;

    const [cart, setCart] = useState([]);
    const [quant, setQuant] = useState(1);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const addToCart = () => {
        const existingCart = [...cart];
        const itemIndex = existingCart.findIndex(
            (item) => item.product_name === product.product_name
        );

        if (itemIndex >= 0) {
            existingCart[itemIndex].quantity =
                (existingCart[itemIndex].quantity || 1) + quant;
        } else {
            existingCart.push({ ...product, quantity: quant });
        }

        setCart(existingCart);
        setQuant(1)
        localStorage.setItem('cart', JSON.stringify(existingCart));
        alert(`${quant} item(s) added to cart!`);
    };



    const relatedProducts = products.filter(
        (p) => p.product_type === product.product_type && p.product_name !== product.product_name
    );

    return (
        <div className='productdetail-container'>
            <Header />

            <div className='productdetail-body'>
                <div className='productdetail-product'>
                    <div className='productdetail-product-images'>
                        <img
                            className='productdetail-product-images-current'
                            src={product.product_img[0].product_img_1}
                            alt=''
                        />
                        <div className='productdetail-product-images-list'>
                            {Object.values(product.product_img[0]).map((img, index) => (
                                <img key={index} src={img} alt='' />
                            ))}
                        </div>
                    </div>

                    <div className='productdetail-product-details'>
                        <label className='productdetail-name'>{product.product_name}</label>
                        <label className='productdetail-price'>₱ {product.product_price}</label>
                        <label className='productdetail-description'>
                            {product.product_description}
                        </label>

                        <div className='productdetail-actions'>
                            <div className='productdetail-actions-quant'>
                                <button
                                    onClick={() => {
                                        if (quant > 1) setQuant(quant - 1);
                                    }}
                                >
                                    -
                                </button>
                                <label>{quant}</label>
                                <button onClick={() => setQuant(quant + 1)}>+</button>
                            </div>
                            <button
                                className='productdetail-actions-add2cart'
                                onClick={addToCart}
                            >
                                ADD TO CART
                            </button>
                            <button className='productdetail-actions-like'>
                                <img src={require('../assets/like.png')} alt='' />
                            </button>
                        </div>

                        <label className='productdetail-ref'>SKU REF: {product.product_ref}</label>
                        <label className='productdetail-categories'>
                            Categories: {product.product_categories}
                        </label>
                        <label className='productdetail-tags'>Tags: {product.product_tags}</label>
                    </div>
                </div>

                <div className='productdetail-info'>
                    <label className='productdetail-info-title'>Making Shine A Happy Place</label>
                    <hr />
                    <label className='productdetail-info-sub'>
                        At Silver Grace, we believe jewelry is more than just an accessory — it’s
                        an expression of confidence, love, and individuality. Every piece is
                        thoughtfully crafted to bring elegance, beauty, and timeless shine to your
                        everyday life. Because when you shine, happiness follows.
                    </label>
                </div>

                <div className='productdetail-customerreviews'>
                    <label className='productdetail-customerreviews-title'>Customer Reviews</label>
                    <hr className='productdetail-customerreviews-hr' />
                    <div className='productdetail-customerreviews-details'>
                        <div className='productdetail-customerreviews-cont'>
                            <div className='productdetail-customerreviews-card'>
                                <label className='productdetail-customerreviews-card-title'>
                                    Very Good Product
                                </label>
                                <hr className='productdetail-customerreviews-card-hr' />
                                <label className='productdetail-customerreviews-card-comment'>
                                    This brand never disappoints! The product arrived beautifully
                                    packaged and the quality is excellent. I’ll definitely be ordering
                                    again soon.
                                </label>
                            </div>
                            <div className='productdetail-customerreviews-customer'>
                                <img
                                    className='productdetail-customerreviews-customer-img'
                                    src={require('../assets/user.jpg')}
                                    alt=''
                                />
                                <div className='productdetail-customerreviews-customer-info'>
                                    <label className='customer-name'>Michael Melo</label>
                                    <label className='customer-customer'>Customer</label>
                                </div>
                            </div>
                        </div>

                        <div className='productdetail-customerreviews-cont'>
                            <div className='productdetail-customerreviews-card'>
                                <label className='productdetail-customerreviews-card-title'>
                                    Elegant and Timeless
                                </label>
                                <hr className='productdetail-customerreviews-card-hr' />
                                <label className='productdetail-customerreviews-card-comment'>
                                    This piece is my new favorite! It’s simple yet classy, and it matches every outfit.
                                    You can really tell it was made with care and precision.
                                </label>
                            </div>
                            <div className='productdetail-customerreviews-customer'>
                                <img
                                    className='productdetail-customerreviews-customer-img'
                                    src={require('../assets/user.jpg')}
                                    alt='Customer Kawhi'
                                />
                                <div className='productdetail-customerreviews-customer-info'>
                                    <label className='customer-name'>Kawhi</label>
                                    <label className='customer-customer'>Customer</label>
                                </div>
                            </div>
                        </div>

                        <div className='productdetail-customerreviews-cont'>
                            <div className='productdetail-customerreviews-card'>
                                <label className='productdetail-customerreviews-card-title'>
                                    Perfect Gift Idea
                                </label>
                                <hr className='productdetail-customerreviews-card-hr' />
                                <label className='productdetail-customerreviews-card-comment'>
                                    Bought this as a gift, and my friend loved it! The packaging was beautiful,
                                    and the jewelry looked even better in person. Definitely worth recommending!
                                </label>
                            </div>
                            <div className='productdetail-customerreviews-customer'>
                                <img
                                    className='productdetail-customerreviews-customer-img'
                                    src={require('../assets/user.jpg')}
                                    alt='Customer Wacky Waks'
                                />
                                <div className='productdetail-customerreviews-customer-info'>
                                    <label className='customer-name'>Wacky Waks</label>
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
                        {relatedProducts.length > 0 ? (
                            relatedProducts.map((related, index) => (
                                <div
                                    key={index}
                                    className='productdetail-relatedproduct-product'
                                    onClick={() =>
                                        navigate('/product', { state: { product: related } })
                                    }
                                >
                                    <img
                                        className='relatedproduct-img'
                                        src={related.product_img[0].product_img_1}
                                        alt={related.product_name}
                                    />
                                    <label className='relatedproduct-name'>
                                        {related.product_name}
                                    </label>
                                    <label className='relatedproduct-price'>
                                        ₱ {related.product_price}
                                    </label>
                                </div>
                            ))
                        ) : (
                            <p>No related products found.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
