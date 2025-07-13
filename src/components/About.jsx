import { Download, MapPin, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { icon: <Calendar style={{ width: '20px', height: '20px' }} />, label: 'Experience', value: '3+ Years' },
    { icon: <MapPin style={{ width: '20px', height: '20px' }} />, label: 'Location', value: 'India' },
    { icon: <Award style={{ width: '20px', height: '20px' }} />, label: 'Projects', value: '50+' },
  ];

  const interests = [
    'AI & Machine Learning',
    'Fintech Solutions', 
    'Open Source',
    'Music Production',
    'Chess Strategy',
    'Travel & Culture'
  ];

  return (
    <motion.section
      id="about"
      className="container-max section-padding"
      data-aos="fade-up"
      style={{ position: 'relative' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}>
        {/* Profile Image and Stats */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {/* Profile Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '16rem',
              height: '16rem',
              borderRadius: '1rem',
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
              border: '1px solid #404040',
              transition: 'all 0.5s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = '#525252';
              e.target.querySelector('span').style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)';
              e.target.style.borderColor = '#404040';
              e.target.querySelector('span').style.transform = 'scale(1)';
            }}
            >
              <span style={{
                fontSize: '6rem',
                transition: 'transform 0.3s'
              }}>👨‍💻</span>
            </div>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '-1rem',
              right: '-1rem',
              width: '2rem',
              height: '2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              left: '-1rem',
              width: '1.5rem',
              height: '1.5rem',
              backgroundColor: 'rgba(229, 229, 229, 0.2)',
              borderRadius: '50%',
              animation: 'pulse 2s ease-in-out infinite',
              animationDelay: '1s'
            }} />
          </div>
          
          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            width: '100%',
            maxWidth: '24rem'
          }}>
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="card"
                style={{
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333333';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#1e1e1e';
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '0.5rem',
                  color: '#ffffff',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e5e5e5'}
                onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                >
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#737373',
                  fontWeight: '500'
                }}>{stat.label}</div>
                <div style={{
                  fontWeight: 'bold',
                  color: '#ffffff',
                  fontSize: '1.125rem'
                }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bio and Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(2.25rem, 4vw, 3rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif'
            }}>
              About Me
            </h2>
            <div style={{
              width: '5rem',
              height: '4px',
              background: 'linear-gradient(to right, #ffffff, #e5e5e5)',
              borderRadius: '9999px',
              marginBottom: '1.5rem'
            }} />
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '1.125rem',
            color: '#b3b3b3',
            fontFamily: '"Inter", sans-serif',
            lineHeight: '1.75'
          }}>
            <p>
              Hi! I'm <span style={{ color: '#ffffff', fontWeight: '600' }}>Devashish</span>, a passionate 
              <span style={{ color: '#ffffff', fontWeight: '600' }}> AI Agent Developer</span> and 
              <span style={{ color: '#ffffff', fontWeight: '600' }}> MERN Stack engineer</span> with a keen 
              interest in fintech and emerging technologies.
            </p>
            <p>
              I love building intelligent, scalable, and impactful digital products that solve real-world problems. 
              My expertise spans across modern web technologies, artificial intelligence, and financial technology solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or enjoying music and chess.
            </p>
          </div>

          {/* Interests/Skills Tags */}
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif'
            }}>
              Interests & Expertise
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {interests.map((interest, index) => (
                <span 
                  key={interest} 
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: '#2a2a2a',
                    border: '1px solid #404040',
                    color: '#e5e5e5',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.3s',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#333333';
                    e.target.style.borderColor = '#525252';
                    e.target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2a2a2a';
                    e.target.style.borderColor = '#404040';
                    e.target.style.color = '#e5e5e5';
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div style={{ paddingTop: '1rem' }}>
            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Download size={18} style={{ animation: 'bounce 1s infinite' }} /> 
              Download Resume
            </button>
          </div>
        </div>
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
        <div style={{
          position: 'absolute',
          top: '25%',
          right: 0,
          width: '16rem',
          height: '16rem',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: 0,
          width: '12rem',
          height: '12rem',
          backgroundColor: 'rgba(229, 229, 229, 0.05)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
      </div>
    </motion.section>
  );
}