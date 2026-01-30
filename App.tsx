import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MyProjects from './components/CaseStudies';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navigation onResetProjects={() => setSelectedProjectId(null)} />
      <main>
        <Hero />
        <About />
        <MyProjects 
          selectedProjectId={selectedProjectId} 
          setSelectedProjectId={setSelectedProjectId} 
        />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;