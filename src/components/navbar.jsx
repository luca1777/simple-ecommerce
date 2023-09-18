import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "../assets/GETWEAR.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";

export const Navbar = ({searchProps}) => {

  const {handleSearchInput, handleSearchButton, searchInput} = searchProps;
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="navbar">
      <Link to="/">
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
          <p>CATEGORIES</p>
        </div>
        <div className="cart-icon" onClick={showNavbar}>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
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
