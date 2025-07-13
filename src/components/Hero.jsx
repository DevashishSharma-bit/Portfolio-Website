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
      paddingTop: '6rem'
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
            top: '5rem',
            left: '5rem',
            width: '16rem',
            height: '16rem',
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
            bottom: '5rem',
            right: '5rem',
            width: '12rem',
            height: '12rem',
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
            width: '8rem',
            height: '8rem',
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
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Main content */}
      <div style={{ 
        zIndex: 10, 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 4rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2rem'
      }}>
        {/* Greeting with icon */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            width: '2px',
            height: '2rem',
            background: 'linear-gradient(180deg, #ffffff 0%, transparent 100%)',
            borderRadius: '1px'
          }} />
          <span style={{
            color: '#e5e5e5',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: '0.875rem',
            opacity: 0.8
          }}>
            Welcome to my portfolio
          </span>
          <Sparkles style={{ color: '#ffffff', width: '20px', height: '20px', opacity: 0.7 }} />
        </motion.div>

        {/* Main heading */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
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
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
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
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: '300',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif',
              lineHeight: '1.1',
              margin: 0
            }}
          >
            Sharma
          </motion.h1>
        </motion.div>
        
        {/* Subtitle */}
        <motion.div
          style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            color: '#b3b3b3',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '400',
            lineHeight: '1.6',
            maxWidth: '600px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code style={{ width: '18px', height: '18px', color: '#ffffff' }} />
                AI Agent Developer
              </span>
              <span style={{ color: '#666666' }}>•</span>
              <span>MERN Stack</span>
              <span style={{ color: '#666666' }}>•</span>
              <span>Fintech Enthusiast</span>
            </div>
            <p style={{ margin: 0, opacity: 0.9 }}>
              Crafting innovative digital solutions with cutting-edge technology and creative problem-solving approaches.
            </p>
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            marginTop: '1rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
              color: '#000000',
              border: 'none',
              borderRadius: '12px',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 6px 25px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.2)';
            }}
          >
            View My Work
            <ArrowRight size={18} />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              background: 'transparent',
              color: '#ffffff',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.target.style.background = 'transparent';
            }}
          >
            <Download size={18} />
            Download CV
          </motion.button>
        </motion.div>
      </div>
      
      {/* Bouncing scroll-down indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div style={{
          padding: '0.5rem',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transition: 'border-color 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)'}
        onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
        >
          <ChevronDown size={24} style={{ color: '#ffffff' }} />
        </div>
        <span style={{
          fontSize: '0.75rem',
          marginTop: '0.5rem',
          color: '#e5e5e5',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: '500',
          opacity: 0.7,
          transition: 'opacity 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '1'}
        onMouseLeave={(e) => e.target.style.opacity = '0.7'}
        >
          Scroll Down
        </span>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
}