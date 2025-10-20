import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MushroomBenefits from './components/MushroomBenefits';
import Products from './components/Products';
import Recipes from './components/Recipes';
import Journey from './components/Journey';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <MushroomBenefits />
        <Products />
        <Recipes />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}

export default App;
