import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from '../../pages/shop/product'

export const CategoryPants = () => {
    const filteredProducts = PRODUCTS.filter((product) => product.category === "pants")

    return (
        <div className='new-products-container'>
          <div className='new-products'>
            {filteredProducts.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </div>
    )
};