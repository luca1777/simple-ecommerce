import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "./logo/logo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />{" "}
      </Link>
      <form className="search-bar">
        <input type="text" placeholder="search..."/>
        <button type="submit">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        </button>
      </form>
      <div className="links">
        <div className="user">
          <FontAwesomeIcon icon={faUser} />
          <p>Contact</p>
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
