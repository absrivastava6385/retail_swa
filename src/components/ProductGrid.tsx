import React from 'react';
import { Product } from '../App';
import './ProductGrid.css';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199.99,
      image: "🎧",
      category: "Electronics",
      description: "Premium wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      image: "⌚",
      category: "Electronics",
      description: "Feature-rich smartwatch with health monitoring"
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 129.99,
      image: "👟",
      category: "Sports",
      description: "Comfortable running shoes for all terrains"
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 89.99,
      image: "☕",
      category: "Home",
      description: "Automatic coffee maker with programmable features"
    },
    {
      id: 5,
      name: "Laptop Bag",
      price: 49.99,
      image: "💼",
      category: "Accessories",
      description: "Durable laptop bag with multiple compartments"
    },
    {
      id: 6,
      name: "Smartphone",
      price: 699.99,
      image: "📱",
      category: "Electronics",
      description: "Latest smartphone with advanced camera features"
    },
    {
      id: 7,
      name: "Reading Glasses",
      price: 39.99,
      image: "👓",
      category: "Accessories",
      description: "Stylish reading glasses with anti-glare coating"
    },
    {
      id: 8,
      name: "Fitness Tracker",
      price: 159.99,
      image: "🏃",
      category: "Sports",
      description: "Advanced fitness tracker with GPS and heart rate monitor"
    }
  ];

  return (
    <section className="product-grid-section" id="products">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <span className="product-emoji">{product.image}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => onAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;