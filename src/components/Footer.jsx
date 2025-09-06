import React from "react";
import "./Footer.css"; // custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side */}
        <div className="footer-left">
          <h2>
            <span className="icon">📖</span> Courses
          </h2>
          <p className="Pp">
            The automated process starts as soon as
            <br /> your clothes go into the machine.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3  style={{color:"white"}}>Our solutions</h3>
          <ul>
            <li><a href="#">Design & creatives</a></li>
            <li><a href="#">Telecommunication</a></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">Programing</a></li>
            <li><a href="#">Architecture</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3 style={{color:"white"}}>Support</h3>
          <ul>
            <li><a href="#">Design & creatives</a></li>
            <li><a href="#">Telecommunication</a></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">Programing</a></li>
            <li><a href="#">Architecture</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3 style={{color:"white"}}>Company</h3>
          <ul>
            <li><a href="#">Design & creatives</a></li>
            <li><a href="#">Telecommunication</a></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">Programing</a></li>
            <li><a href="#">Architecture</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright ©2025 All rights reserved | This template is made with
        <span> ❤ </span> by Colorlib
      </div>

      <a href="#" className="back-to-top">↑</a>
    </footer>
  );
};

export default Footer;
