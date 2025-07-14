import { motion } from 'framer-motion';
import { ChevronDown, Code, Sparkles, ArrowRight, Download } from 'lucide-react';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.27/build/spline-viewer.js';
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="spline-viewer.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      overflow: 'hidden',
      background: 'transparent',
      paddingTop: 'clamp(4rem, 10vw, 6rem)'
    }}>
      {/* Spline 3D Model */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -5
      }}>
        <spline-viewer url="https://prod.spline.design/s8AtnL84gfe9HKuz/scene.splinecode"></spline-viewer>
      </div>
      
      {/* Animated geometric background with greyscale theme */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -10 }}>
        {/* Large floating orbs */}
        <motion.div
          style={{
            position: 'absolute',
            top: 'clamp(2rem, 8vw, 5rem)',
            left: 'clamp(2rem, 8vw, 5rem)',
            width: 'clamp(8rem, 20vw, 16rem)',
            height: 'clamp(8rem, 20vw, 16rem)',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(229, 229, 229, 0.05) 100%)',
            filter: 'blur(60px)'
          }}
          animate={{ 
            y: [0, 30, 0], 
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: 'clamp(2rem, 8vw, 5rem)',
            right: 'clamp(2rem, 8vw, 5rem)',
            width: 'clamp(6rem, 15vw, 12rem)',
            height: 'clamp(6rem, 15vw, 12rem)',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(229, 229, 229, 0.08) 0%, rgba(212, 212, 212, 0.04) 100%)',
            filter: 'blur(60px)'
          }}
          animate={{ 
            y: [0, -25, 0], 
            x: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(4rem, 10vw, 8rem)',
            height: 'clamp(4rem, 10vw, 8rem)',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            filter: 'blur(40px)'
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: 'clamp(25px, 6vw, 50px) clamp(25px, 6vw, 50px)'
        }} />
      </div>
      
      {/* Main content */}
      <div style={{ 
        zIndex: 10, 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 clamp(1rem, 6vw, 4rem)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'clamp(1.5rem, 4vw, 2rem)'
      }}>
        {/* Greeting with icon */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 'clamp(0.5rem, 2vw, 0.75rem)',
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            width: '2px',
            height: 'clamp(1.5rem, 4vw, 2rem)',
            background: 'linear-gradient(180deg, #ffffff 0%, transparent 100%)',
            borderRadius: '1px'
          }} />
          <span style={{
            color: '#e5e5e5',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
            opacity: 0.8
          }}>
            Welcome to my portfolio
          </span>
          <Sparkles style={{ 
            color: '#ffffff', 
            width: 'clamp(16px, 3vw, 20px)', 
            height: 'clamp(16px, 3vw, 20px)', 
            opacity: 0.7 
          }} />
        </motion.div>

        {/* Main heading */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(0.25rem, 1vw, 0.5rem)'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            style={{
              fontSize: 'clamp(2rem, 8vw, 5rem)',
              fontWeight: '300',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif',
              lineHeight: '1.1',
              margin: 0
            }}
          >
            Hi, I'm
          </motion.h1>
          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 12vw, 7rem)',
              fontWeight: '800',
              fontFamily: '"Poppins", sans-serif',
              lineHeight: '1',
              margin: 0,
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 50%, #d4d4d4 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            Devashish
          </motion.h1>
          <motion.h1
            style={{
              fontSize: 'clamp(1.5rem, 6vw, 3rem)',
              fontWeight: '600',
              color: '#e0e0e0',
              fontFamily: '"Poppins", sans-serif',
              lineHeight: '1.2',
              margin: 0,
              marginTop: 'clamp(0.5rem, 2vw, 1rem)'
            }}
          >
            AI Agent Developer & MERN Stack Engineer
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.p
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            color: '#b3b3b3',
            maxWidth: 'clamp(300px, 80vw, 600px)',
            lineHeight: '1.6',
            fontFamily: '"Inter", sans-serif',
            margin: 'clamp(1rem, 3vw, 1.5rem) 0'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting intelligent digital solutions with cutting-edge AI and modern web technologies. 
          Passionate about building scalable applications that make a real impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          style={{
            display: 'flex',
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.5rem, 2vw, 0.75rem)',
              background: 'linear-gradient(135deg, #e0e0e0 0%, #b3b3b3 100%)',
              color: '#222',
              textDecoration: 'none',
              padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
              fontFamily: '"Inter", sans-serif',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Code size={Math.min(20, Math.max(16, window.innerWidth * 0.015))} />
            View Projects
            <ArrowRight size={Math.min(20, Math.max(16, window.innerWidth * 0.015))} />
          </motion.a>

          <motion.a
            href="#contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.5rem, 2vw, 0.75rem)',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              textDecoration: 'none',
              padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
              fontFamily: '"Inter", sans-serif',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              background: 'rgba(255, 255, 255, 0.15)',
              borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={Math.min(20, Math.max(16, window.innerWidth * 0.015))} />
            Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 6vw, 3rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#e0e0e0',
            cursor: 'pointer'
          }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ y: 5 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span style={{
            fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
            fontWeight: '500',
            opacity: 0.7
          }}>
            Scroll to explore
          </span>
          <ChevronDown size={Math.min(24, Math.max(20, window.innerWidth * 0.018))} />
        </motion.div>
      </motion.div>
    </section>
  );
}