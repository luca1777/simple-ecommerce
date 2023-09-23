import React from 'react';
import { Product } from './product';
import { PRODUCTS } from "../../products";
import { Hero } from "../../components/hero";
import { NewProducts } from '../../components/new-products';
import { Banner } from "../../components/banner.jsx";
import { TrendingSlider } from "..//../components/trending-slider";
import { Newsletter } from "..//../components/newsletter";
import { Footer } from '../../components/footer';

export const Shop = ({searchProduct}) => {
  const filteredProducts = PRODUCTS.filter(val => val.productName.toLowerCase().includes(searchProduct.toLowerCase()));

  return (
    <div className="shop">
      {searchProduct ? (
        <div className="search-products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} data={product} />
            ))
          ) : (
            <p>Doesn't exist any product with that name.</p>
          )}
        </div>
      ) : (
        <>
          <Hero />
          <NewProducts />
          <Banner />
          <TrendingSlider />
        </>
      )}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Shop;


