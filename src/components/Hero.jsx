import { motion } from 'framer-motion';
import { ChevronDown, Code, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)'
    }}>
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
      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Greeting with icon */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles style={{ color: '#ffffff', width: '24px', height: '24px' }} />
          <span style={{
            color: '#e5e5e5',
            fontWeight: '500',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontSize: '0.875rem'
          }}>
            Welcome to my portfolio
          </span>
          <Sparkles style={{ color: '#ffffff', width: '24px', height: '24px' }} />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            fontFamily: '"Poppins", sans-serif'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span style={{
            display: 'block',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Hi, I'm
          </span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(to right, #ffffff, #e5e5e5, #d4d4d4)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'glow 2s ease-in-out infinite'
          }}>
            Devashish
          </span>
        </motion.h1>
        
        {/* Subtitle with typing effect */}
        <motion.div
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#b3b3b3',
            fontFamily: '"Inter", sans-serif'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code style={{ width: '20px', height: '20px', color: '#ffffff' }} />
              AI Agent Developer
            </span>
            <span style={{ color: '#d4d4d4' }}>|</span>
            <span>MERN Stack</span>
            <span style={{ color: '#d4d4d4' }}>|</span>
            <span>Fintech Enthusiast</span>
          </div>
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '3rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            View My Work
            <motion.span
              whileHover={{ x: 4 }}
              style={{ transition: 'transform 0.3s' }}
            >
              →
            </motion.span>
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
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