import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Check if the script is already present
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.10.31/build/spline-viewer.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.31/build/spline-viewer.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <motion.section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'transparent', // Make background transparent
        overflow: 'hidden',
        padding: '2rem'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Spline 3D Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: -20,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        {/* Spline Viewer custom element */}
        <spline-viewer url="https://prod.spline.design/s8AtnL84gfe9HKuz/scene.splinecode" style={{ width: '100vw', height: '100vh', minHeight: '100%', minWidth: '100%', position: 'absolute', top: 0, left: 0 }}></spline-viewer>
      </div>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -10,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '30rem',
            height: '30rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            borderRadius: '50%',
            filter: 'blur(120px)'
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '25rem',
            height: '25rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
            borderRadius: '50%',
            filter: 'blur(100px)'
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div style={{
        maxWidth: '1400px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div style={{
              width: '3px',
              height: '2rem',
              background: 'linear-gradient(180deg, #ffffff 0%, transparent 100%)',
              borderRadius: '2px'
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
            <div style={{
              width: '3px',
              height: '2rem',
              background: 'linear-gradient(180deg, #ffffff 0%, transparent 100%)',
              borderRadius: '2px'
            }} />
          </motion.div>

          <motion.h1
            style={{
              fontSize: '4rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1.5rem',
              fontFamily: '"Poppins", sans-serif',
              lineHeight: '1.2'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Devashish
            </span>
          </motion.h1>

          <motion.h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#b3b3b3',
              marginBottom: '2rem',
              fontFamily: '"Poppins", sans-serif',
              lineHeight: '1.3'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p
            style={{
              fontSize: '1.25rem',
              color: '#b3b3b3',
              lineHeight: '1.7',
              marginBottom: '3rem',
              fontFamily: '"Inter", sans-serif',
              maxWidth: '600px'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Passionate about creating innovative digital solutions with modern technologies. 
            Specializing in AI integration, web development, and user experience design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <motion.a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: '#ffffff',
                color: '#333333',
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 6px 25px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={20} />
            </motion.a>

            <motion.button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                padding: '1rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(255, 255, 255, 0.6)',
                background: 'rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            style={{
              display: 'flex',
              gap: '1rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {[
              { icon: <Github size={24} />, href: '#', label: 'GitHub' },
              { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
              { icon: <Twitter size={24} />, href: '#', label: 'Twitter' },
              { icon: <Mail size={24} />, href: '#contact', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3rem',
                  height: '3rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  scale: 1.1,
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - 3D Model */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Removed 3D Model Placeholder and floating elements */}
        </motion.div>
      </div>
    </motion.section>
  );
}