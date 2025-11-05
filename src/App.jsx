import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MushroomBenefits from './components/MushroomBenefits';
import Products from './components/Products';
import Recipes from './components/Recipes';
import Journey from './components/Journey';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
       
        <Products />
        <MushroomBenefits />
        <Recipes />
      
        <Contact />
      </main>
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export default App;
