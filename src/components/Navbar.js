import React from "react";
import logo from "../img/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contect</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
