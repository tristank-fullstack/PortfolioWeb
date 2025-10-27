import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative font-sans leading-normal tracking-tight text-white overflow-x-hidden">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />
        <div className="relative z-40">
          <Header />
          <main className="container mx-auto px-6 md:px-12">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </main>
          <footer className="text-center py-6 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Tristan Kempes. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;