import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "../assets/GETWEAR.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const Navbar = ({searchProps}) => {

  const {handleSearchInput, handleSearchButton, searchInput} = searchProps;

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <form onSubmit={handleSearchButton} className="search-bar">
        <input type="text" value={searchInput} placeholder="search..." onChange={handleSearchInput}/>
        <button type="submit">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        </button>
      </form>
      <div className="links">
        <div className="categories">
          <p>CATEGORIES</p>
        </div>
        <div className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </div>
  );
}
