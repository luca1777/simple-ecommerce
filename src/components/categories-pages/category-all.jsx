import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from '../../pages/shop/product'

export const CategoryAll = () => {
    return (
        <div className='new-products-container'>
          <div className='new-products'>
            {PRODUCTS.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </div>
      )
}
