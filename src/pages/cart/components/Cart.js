import React, { useState, useEffect } from 'react';
import './Cart.css';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    } else {
      setCartItems([]);
    }
  }, []);


  const handleQuantityChange = (index, type) => {
    const updatedItems = [...cartItems];
    if (type === 'increase') updatedItems[index].quantity += 1;
    else if (type === 'decrease' && updatedItems[index].quantity > 1)
      updatedItems[index].quantity -= 1;
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const totalPrice = cartItems?.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  );

  return (
    <div className='cart-container'>
      <Header />
      <div className='cart-body'>
        <div className='cart-title'>
          <label className='cart'>Your Cart</label>
        </div>
        {cartItems.length === 0 ? (
          <p className='cart-empty'>Your cart is empty.</p>
        ) : (
          <div className='cart-list'>
            {cartItems.map((item, index) => (
              <div className='cart-card' key={index}>
                <img src={item.product_img[0].product_img_1} alt={item.product_name} />
                <div className='cart-info'>
                  <p className='cart-name'>{item.product_name}</p>
                  <p className='cart-price'>₱ {item.product_price}</p>
                  <div className='cart-quantity'>
                    <button onClick={() => handleQuantityChange(index, 'decrease')}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(index, 'increase')}>+</button>
                  </div>
                  <button className='remove-btn' onClick={() => handleRemoveItem(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className='cart-summary'>
            <h3>Total: ₱ {totalPrice}</h3>
            <button className='checkout-btn'
              onClick={() => {
                localStorage.removeItem('cart')
                navigate('/shop')
              }}
            >Proceed to Checkout</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
