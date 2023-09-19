import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';

export const CategoriesSection = () => {
  const { btnName, handleBtnName } =useContext(ShopContext);

  return (
    <div className='container-catego-section'>
      <div className='catego-section'>
        <div className='title'>
          <h3>{btnName}</h3>
        </div>
        <div className='section-btns'>
          <Link to="all" >
            <button onClick={() => handleBtnName("all")}>All</button>
          </Link>
          <Link to="hoodies" >
            <button onClick={() => handleBtnName("hoodies")}>Hoodies</button>
          </Link>
          <Link to="t-shirts" >
            <button onClick={() => handleBtnName("t-shirts")}>T-Shirts</button>
          </Link>
          <Link to="pants" >
            <button onClick={() => handleBtnName("pants")}>Pants</button>
          </Link>
          <Link to="shoes" >
            <button onClick={() => handleBtnName("shoes")}>Shoes</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
