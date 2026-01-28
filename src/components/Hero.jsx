import React from "react";
import "./hero.css";
import logoIcon from "../img/68f9d734197834f0e5eadd8c_auriga-symbol.svg";

function Hero() {
  return (
    <section className="hero">
      {/* Navigation Bar */}
      <nav className="hero-nav">
        <div className="hero-nav-left">
          <img src={logoIcon} alt="Auriga" className="hero-logo-icon" />
        </div>
        <div className="hero-nav-links">
          <a href="#technology" className="nav-link">TECHNOLOGY</a>
          <a href="#products" className="nav-link">PRODUCTS</a>
          <a href="#careers" className="nav-link">CAREERS</a>
          <a href="#news" className="nav-link">NEWS & MEDIA</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </div>
      </nav>

      {/* Main Title */}
      <h1 className="hero-title">AURIGA</h1>

      {/* Bottom Left Text */}
      <div className="hero-bottom-left">
        <p className="hero-text-line">ADVANCED TECHNOLOGY</p>
        <p className="hero-text-line hero-text-highlight highlight-blue">
          FOR THE FUTURE
        </p>
      </div>

      {/* Bottom Right Text and Button */}
      <div className="hero-bottom-right">
        <p className="hero-text-line">EXPLORE OUR SOLUTIONS</p>
        <button className="hero-cta-button">
          GET STARTED
          <span className="button-dot"></span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
