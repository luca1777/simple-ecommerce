import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PRODUCTS } from '../products';
import { Product } from '../pages/shop/product';
import "./trending-slider.css"

export const TrendingSlider = () => {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    } 
    
    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    } 

    const filteredItems = PRODUCTS.filter((product) => product.id >= 8);

  return (
    <div className="trending">
      <div className="slider-container">
        <div className="titleAndBtns">
          <h3>Hot Products</h3>
          <div className="slider-btns">
            <button title="scroll left" onClick={slideLeft}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button title="scroll right" onClick={slideRight}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className='row-container-slider' id="slider">
            {filteredItems.map((product) => (
                <Product key={product.id} data={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
