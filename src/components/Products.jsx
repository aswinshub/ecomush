import React from 'react';
import AnimatedMushroom from './AnimatedMushroom';
import './Products.css';

const Products = () => {
  const products = [
    {
      name: "Oyster Mushrooms",
      description: "Fresh, tender oyster mushrooms with a delicate flavor",
      price: "₹150/kg",
      features: ["High Protein", "Low Calorie", "Rich in Vitamins"]
    },
    {
      name: "Button Mushrooms",
      description: "Classic white button mushrooms, perfect for all dishes",
      price: "₹120/kg",
      features: ["Versatile", "Mild Flavor", "Easy to Cook"]
    },
    {
      name: "Shiitake Mushrooms",
      description: "Premium shiitake mushrooms with rich umami flavor",
      price: "₹300/kg",
      features: ["Premium Quality", "Rich Flavor", "High Nutrition"]
    },
    {
      name: "Mixed Variety Pack",
      description: "Assorted fresh mushrooms for diverse cooking",
      price: "₹200/kg",
      features: ["Variety Pack", "Best Value", "Fresh Daily"]
    }
  ];

  return (
    <section id="products" className="products parallax">
      <div className="container">
        <div className="products-content">
          <h2 className="section-title fade-in-up">Our Products</h2>
          <p className="section-subtitle fade-in-up">
            Discover our range of fresh, organic mushrooms grown with care in Kerala
          </p>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className={`product-card scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="product-image">
                  <div className="mushroom-display">
                    <div className="mushroom-icon large float"></div>
                  </div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="order-btn">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="products-cta fade-in-up">
            <p className="cta-text">Need custom quantities or have special requirements?</p>
            <button className="btn">Contact Us</button>
          </div>
        </div>
      </div>
      
      {/* Animated Mushrooms */}
      <AnimatedMushroom size="medium" delay={0} position="top-left" />
      <AnimatedMushroom size="small" delay={1} position="top-right" />
      <AnimatedMushroom size="large" delay={2} position="center-left" />
      <AnimatedMushroom size="medium" delay={3} position="center-right" />
      <AnimatedMushroom size="small" delay={4} position="bottom-left" />
      <AnimatedMushroom size="large" delay={5} position="bottom-right" />
    </section>
  );
};

export default Products;
