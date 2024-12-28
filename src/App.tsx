import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

function App() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar onDemoClick={() => setIsDemoFormOpen(true)} />
      <Hero onDemoClick={() => setIsDemoFormOpen(true)} />
      <Services />
      <Portfolio />
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;