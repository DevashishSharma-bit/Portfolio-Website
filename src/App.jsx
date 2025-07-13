import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
