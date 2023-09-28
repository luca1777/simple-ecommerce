import React, { useState } from 'react'
import { PRODUCTS } from '../../products'
import { Product } from '../../pages/shop/product'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Spinner } from "./spinner";


export const CategoryAll = () => {
  const [dataProducts, setDataProducts] = useState(PRODUCTS.slice(0, 8));
  const [hasMore, setHasMore] = useState(true);
  const moreProducts = () => {
    const currentProducts = dataProducts.length;
    const nextProducts = Math.min(currentProducts + 8, PRODUCTS.length);
    if (currentProducts < PRODUCTS.length) {
      setTimeout(() => {
        setDataProducts(dataProducts.concat(PRODUCTS.slice(currentProducts, nextProducts)));
      }, 1500);
    } else {
      setHasMore(false)
    }
  };

    return (
      <div className="new-products-container">
        <InfiniteScroll dataLength={dataProducts} next={moreProducts} hasMore={hasMore} 
        loader={<Spinner />}>
          <div className="new-products">
            {dataProducts.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
}
