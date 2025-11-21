import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MushroomBenefits from './components/MushroomBenefits';
import Products from './components/Products';
import Recipes from './components/Recipes';
import Journey from './components/Journey';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import WhatsAppButton from './components/WhatsAppButton';
import RecipesPage from './pages/RecipesPage';
import './App.css';

function Home() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
