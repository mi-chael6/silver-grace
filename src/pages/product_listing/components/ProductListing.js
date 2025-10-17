import React, { useState, useEffect } from 'react';
import './ProductListing.css';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import products from '../../../products/Products';
import { useNavigate } from 'react-router-dom';

export default function ProductListing() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('All Products');

  const filters = ['All Products', 'Ring', 'Necklace', 'Bracelet', 'Earrings'];

  const filteredProducts =
    selectedFilter === 'All Products'
      ? products
      : products.filter(
        (item) =>
          item.product_type.toLowerCase() === selectedFilter.toLowerCase()
      );



  return (
    <div className='productlisting-container'>
      <Header />

      <div className='productlisting-body'>
        <div className='productlisting-title'>
          <label className='products'>Products</label>
          <img
            src={require('../assets/title_back.png')}
            alt='title background'
          />
        </div>

        <div className='productlisting-filter'>
          {filters.map((filter, index) => (
            <button
              key={index}
              className={selectedFilter === filter ? 'active' : ''}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className='productlisting-list'>
          {filteredProducts.map((item, index) => (
            <div
              className='productlisting-card'
              key={index}
              onClick={() => navigate('/product', { state: { product: item } })}
            >
              <img
                src={item.product_img[0].product_img_1}
                alt={item.product_name}
              />
              <p>{item.product_name}</p>
              <span>₱ {item.product_price}</span>
            </div>
          ))}
        </div>

        <div className='productlisting-navigation'>
          <button>
            <img src={require('../assets/left.png')} alt='left' />
          </button>
          <button>
            <img src={require('../assets/right.png')} alt='right' />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
