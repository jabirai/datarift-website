import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DemoForm from './components/DemoForm';

function App() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar onDemoClick={() => setIsDemoFormOpen(true)} />
      <Hero onDemoClick={() => setIsDemoFormOpen(true)} />
      <Services />
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  );
}

export default App;