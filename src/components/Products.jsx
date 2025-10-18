import React from 'react';
import AnimatedMushroom from './AnimatedMushroom';
import './Products.css';

const Products = () => {
  const handleOrderNow = (productName, productPrice) => {
    const message = `Hi! I'm interested in ordering ${productName} (${productPrice}). Can you please provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917012892552?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    {
      name: "Oyster Mushrooms",
      description: "Fresh, tender oyster mushrooms with a delicate flavor",
      price: "₹50",
      features: ["150 g","High Protein", "Low Calorie", "Rich in Vitamins"],
      disabled: false
    },
    {
      name: "Oyster Mushrooms",
      description: "Fresh, tender oyster mushrooms with a delicate flavor",
      price: "₹80",
      features: ["250 g","Versatile", "Mild Flavor", "Easy to Cook"],
      disabled: false
    },
    {
      name: "Oyster Mushroom Pickle",
      description: "Premium oyster mushroom pickle with rich flavor",
      price: "₹150",
      features: ["Premium Quality", "Rich Flavor", "High Nutrition"],
      disabled: true
    },
    {
      name: "Oyster Mushroom Powder",
      description: "Fine oyster mushroom powder for cooking and supplements",
      price: "₹3500/kg",
      features: ["Variety Pack", "Best Value", "Fresh Daily"],
      disabled: true
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
              <div key={index} className={`product-card scale-in ${product.disabled ? 'disabled' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
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
                    <button 
                      className={`order-btn ${product.disabled ? 'disabled' : ''}`} 
                      disabled={product.disabled}
                      onClick={() => !product.disabled && handleOrderNow(product.name, product.price)}
                    >
                      {product.disabled ? 'Coming Soon' : 'Order Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="products-cta fade-in-up">
            <p className="cta-text">Need custom quantities or have special requirements?</p>
            <button className="btn" onClick={() => handleOrderNow('Custom Order', 'Custom Price')}>Contact Us</button>
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
