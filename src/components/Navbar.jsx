import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // hamburger menu toggle साठी state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      {/* Logo */}
      <div className="logo">
        <i className="bi bi-book-fill" style={{ padding: "10px" }}></i>
        Courses
      </div>

      {/* Hamburger Icon (mobile साठी) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>

        {/* Blog Dropdown */}
        <li className="dropdown">
          <span>Blog</span>
          <ul className="dropdown-menu">
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/blog-details" onClick={() => setMenuOpen(false)}>Blog Details</Link></li>
            <li><Link to="/elements" onClick={() => setMenuOpen(false)}>Elements</Link></li>
          </ul>
        </li>

        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
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
