import React from 'react';
import "./banner.css";
import banner from "../assets/banner.jpg"
import { Link } from 'react-router-dom';


export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="text-side">
          <h2>Don't be afraid to be different</h2>
          <p>Try the new products and create a unique style</p>
          <Link to="categories/all">
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="img-side">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

