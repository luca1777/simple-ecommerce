import React from 'react';
import { PRODUCTS } from '../products';
import { Product } from '../pages/shop/product';
import "./new-products.css";


export const NewProducts = () => {
  const filteredItems = PRODUCTS.filter((product) => product.id <= 8)

  return (
    <div className='new-products-container'>
      <h2>Check our latest products</h2>
      <div className='new-products'>
        {filteredItems.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}
