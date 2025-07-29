import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure this filename matches your actual CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">VERSATALES</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/role-registration">Role Registration</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
