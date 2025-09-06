import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      {/* Logo */}
      <div className="logo">
        <i className="bi bi-book-fill" style={{ padding: "10px" }}></i>
        Courses
      </div>

      {/* Nav Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Blog Dropdown */}
        <li className="dropdown">
          <span>Blog </span>
          <ul className="dropdown-menu">
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/blog-details">Blog Details</Link></li>
            <li><Link to="/elements">Elements</Link></li>
          </ul>
        </li>

        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Buttons */}
      <div className="buttons">
        <button className="join-btn">Join</button>
        <Link to="/login">
          <button className="login-btn">Log In</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
