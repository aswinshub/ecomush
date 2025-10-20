import React from 'react';
import './MushroomBenefits.css';

const MushroomBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Rich in Nutrients",
      description: "Mushrooms are packed with essential vitamins, minerals, and antioxidants that support overall health and boost immunity.",
      icon: "🥬",
      details: [
        "High in Vitamin D",
        "Rich in B-complex vitamins",
        "Contains selenium and potassium",
        "Low in calories, high in fiber"
      ]
    },
    {
      id: 2,
      title: "Immune System Support",
      description: "Natural compounds in mushrooms help strengthen your immune system and protect against various diseases.",
      icon: "🛡️",
      details: [
        "Beta-glucans for immune enhancement",
        "Antioxidant properties",
        "Anti-inflammatory effects",
        "Natural disease resistance"
      ]
    },
    {
      id: 3,
      title: "Heart Health",
      description: "Mushrooms contain compounds that help maintain healthy cholesterol levels and support cardiovascular health.",
      icon: "❤️",
      details: [
        "Helps lower cholesterol",
        "Rich in potassium for blood pressure",
        "Contains heart-healthy fiber",
        "Low sodium content"
      ]
    },
    {
      id: 4,
      title: "Weight Management",
      description: "Low in calories and high in fiber, mushrooms are perfect for maintaining a healthy weight and feeling full longer.",
      icon: "⚖️",
      details: [
        "Low calorie density",
        "High water content",
        "Rich in dietary fiber",
        "Helps control appetite"
      ]
    },
    {
      id: 5,
      title: "Brain Health",
      description: "Mushrooms contain compounds that support cognitive function and may help protect against age-related mental decline.",
      icon: "🧠",
      details: [
        "Supports cognitive function",
        "May reduce risk of dementia",
        "Rich in B-vitamins for brain health",
        "Contains neuroprotective compounds"
      ]
    },
    {
      id: 6,
      title: "Digestive Health",
      description: "The fiber and prebiotics in mushrooms promote healthy gut bacteria and support optimal digestive function.",
      icon: "🫁",
      details: [
        "Promotes healthy gut bacteria",
        "Rich in prebiotic fiber",
        "Supports digestive regularity",
        "May reduce inflammation in gut"
      ]
    }
  ];

  return (
    <section id="benefits" className="mushroom-benefits">
      <div className="container">
        <div className="benefits-content">
          <h2 className="section-title">Health Benefits of Mushrooms</h2>
          <p className="section-subtitle">
            Discover why mushrooms are considered a superfood and how they can enhance your well-being
          </p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.id} 
                className="benefit-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon">
                  <span className="icon-emoji">{benefit.icon}</span>
                </div>
                
                <div className="benefit-content">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                  
                  <ul className="benefit-details">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MushroomBenefits;
