import React from "react";
import "./style.css";
import "../../Style/commonClass.css";

function Footer() {
    return(
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">
            <a href="/" className="type-style-none-a">
            <span className="logo-text">EAT SURE</span>
            </a>
          </h2>
          <p>Eat Healthy Stay Healthy</p>
        </div>
        <div className="footer-section links">
          <h2>Learn More</h2>
          <ul>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: contact@vikram.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom-text">&copy; 2024 Vikram A . All rights reserved.</p>
    </footer>
      )
}

export default Footer;