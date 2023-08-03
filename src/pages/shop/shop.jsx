import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import "./shop.css";

export const Shop = ({searchProduct}) => {


  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Best product</h1>
        </div>
        <div className="products">
        {PRODUCTS.filter((val) => {
          if (searchProduct === "") {
            return val;
          } else if (val.productName.toLowerCase().includes(searchProduct.toLowerCase())) {
            return val;
          } else {
            return null;
          }
        }).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}
