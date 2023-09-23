import React from 'react'
import { CategoriesSection } from '../../components/categories-section';
import "./categories.css";
import { Outlet } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import Product from '../shop/product';

export const Categories = ({searchProduct}) => {
  const filteredProducts = PRODUCTS.filter(val => val.productName.toLowerCase().includes(searchProduct.toLowerCase()));

  return (
    <>
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
          <CategoriesSection />
          <Outlet />
        </>
      )}
    </>
  );
}
