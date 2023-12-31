import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "../assets/GETWEAR.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";
import { ShopContext } from '../context/shop-context';

export const Navbar = ({searchProps}) => {
  const {handleSearchInput, handleSearchButton, searchInput} = searchProps;
  const { cartItems } = useContext(ShopContext);
  const navRef = useRef();
  const totalItemsInCart = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const handleLogoClick = (event) => {
    event.preventDefault(); 
    window.location.href = "/";
  }

  return (
    <div className="navbar">
      <Link to="/" onClick={handleLogoClick}>
        <img src={logo} alt="logo" />
      </Link>
      <form onSubmit={handleSearchButton} className="search-bar">
        <input
          type="text"
          value={searchInput}
          placeholder="search..."
          onChange={handleSearchInput}
        />
        <button type="submit">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        </button>
      </form>
      <div className="links" ref={navRef}>
        <div className="categories">
          <Link to="/categories/all" onClick={showNavbar}>CATEGORIES</Link>
        </div>
        <div className="cart-icon" onClick={showNavbar}>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>}
          </Link>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}
