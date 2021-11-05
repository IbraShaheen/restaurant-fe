import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div className="nav-title">
      Restaurant
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className="nav-links">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT US</Link>
      <Link to="/menu">MENU</Link>
      <Link to="/gallary">GALLARY</Link>
      <Link to="/contact">CONTACT US</Link>
      <Link to="">RESERVATION</Link>
      <Link to="">ARABIC</Link>

      <Link to="/signin" >Login</Link>

    </div>
  </div>
  );
};

export default NavBar;
