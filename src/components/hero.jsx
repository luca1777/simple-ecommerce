import React from "react";
import "./hero.css";
import Photo1 from "../assets/grid-one.jpg";
import Photo2 from "../assets/grid-two.webp";
import Photo3 from "../assets/grid-three.webp";
import Photo4 from "../assets/grid-four.webp";

export const Hero = () => {
  return (
    <div className="home-banner">
      <div className="container">
        <div className="grid-container">
          <div className="featured grid-one">
            <div id="img1" className="lil-overlay"></div>
            <img src={Photo1} alt="grid1" />
            <p className="grids-description">Hoodies</p>
          </div>
          <div className="featured grid-two">
            <div id="img2" className="lil-overlay"></div>
            <img src={Photo2} alt="grid2" />
            <p className="grids-description">T-Shirts</p>
          </div>
          <div className="featured grid-three">
            <div id="img3" className="lil-overlay"></div>
            <img src={Photo3} alt="grid3" />
            <p className="grids-description">Pants</p>
          </div>
          <div className="featured grid-four">
            <div id="img4" className="lil-overlay"></div>
            <img src={Photo4} alt="grid4" />
            <p className="grids-description">Shoes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
