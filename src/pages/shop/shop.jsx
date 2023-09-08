import React from 'react';
import { Product } from './product';
import "./shop.css";
import { PRODUCTS } from "../../products" 
import { Hero } from "../../components/hero"

export const Shop = ({searchProduct}) => {

  return (
    <div className="shop">
        <div className="shop-banner">
          <Hero />
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
