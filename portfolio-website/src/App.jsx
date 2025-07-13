import React from 'react';
import Spline from '@splinetool/react-spline';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

export default function App() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Spline Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
      }}>
        <Spline
          scene="https://prod.spline.design/s8AtnL84gfe9HKuz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}
