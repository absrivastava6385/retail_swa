import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to RetailHub</h1>
        <p>Discover amazing products at unbeatable prices</p>
        <button className="cta-button">Shop Now</button>
      </div>
      <div className="hero-image">
        <div className="hero-placeholder">
          🛍️
        </div>
      </div>
    </section>
  );
};

export default Hero;