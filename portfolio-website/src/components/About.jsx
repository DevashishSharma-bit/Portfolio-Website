import { Download, MapPin, Calendar, Award, Code, Brain, Zap, Heart, Star, TrendingUp, Users, Rocket, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { icon: <Calendar style={{ width: '20px', height: '20px' }} />, label: 'Experience', value: '3+ Years' },
    { icon: <MapPin style={{ width: '20px', height: '20px' }} />, label: 'Location', value: 'India' },
    { icon: <Award style={{ width: '20px', height: '20px' }} />, label: 'Projects', value: '50+' },
    { icon: <Users style={{ width: '20px', height: '20px' }} />, label: 'Clients', value: '25+' },
  ];

  const skills = [
    { name: 'AI & Machine Learning', icon: <Brain size={16} />, level: 90 },
    { name: 'MERN Stack', icon: <Code size={16} />, level: 95 },
    { name: 'Fintech Solutions', icon: <TrendingUp size={16} />, level: 85 },
    { name: 'Open Source', icon: <Heart size={16} />, level: 80 },
    { name: 'Music Production', icon: <Zap size={16} />, level: 75 },
    { name: 'Chess Strategy', icon: <Star size={16} />, level: 70 },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'AI Agent Development',
      description: 'Leading innovative AI agent projects with cutting-edge technologies',
      icon: <Brain size={20} />
    },
    {
      year: '2022',
      title: 'MERN Stack Mastery',
      description: 'Built scalable web applications and fintech solutions',
      icon: <Code size={20} />
    },
    {
      year: '2021',
      title: 'Career Beginnings',
      description: 'Started journey in software development and open source',
      icon: <Rocket size={20} />
    }
  ];

  return (
    <motion.section
      id="about"
      style={{ 
        position: 'relative',
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
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
            top: '10%',
            right: '10%',
            width: '20rem',
            height: '20rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '15%',
            width: '16rem',
            height: '16rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header Section */}
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              My Story
            </span>
            <div style={{
              width: '3px',
              height: '2rem',
              background: 'linear-gradient(180deg, #ffffff 0%, transparent 100%)',
              borderRadius: '2px'
            }} />
          </motion.div>

          <motion.h2 
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif',
              lineHeight: '1.2'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About Me
          </motion.h2>

          <motion.p 
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: '#b3b3b3',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: '"Inter", sans-serif',
              lineHeight: '1.6'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate AI Agent Developer and MERN Stack engineer crafting innovative digital solutions
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
          marginBottom: '4rem'
        }}>
          {/* Left Column - Profile & Stats */}
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Image */}
            <div style={{ textAlign: 'center' }}>
              <motion.div 
                style={{ position: 'relative', display: 'inline-block' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{
                  width: '18rem',
                  height: '18rem',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  border: '2px solid #333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <User size={120} color="#fff" />
                  
                  {/* Floating elements */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      width: '1rem',
                      height: '1rem',
                      background: 'linear-gradient(135deg, #e0e0e0, #b3b3b3)',
                      borderRadius: '50%',
                      boxShadow: '0 0 20px rgba(224, 224, 224, 0.3)'
                    }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      width: '0.75rem',
                      height: '0.75rem',
                      background: 'linear-gradient(135deg, #b3b3b3, #888)',
                      borderRadius: '50%',
                      boxShadow: '0 0 15px rgba(179, 179, 179, 0.3)'
                    }}
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div>
              <motion.h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#ffffff',
                  fontFamily: '"Poppins", sans-serif',
                  textAlign: 'center'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Key Metrics
              </motion.h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem'
              }}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    style={{
                      padding: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -4,
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      color: '#e0e0e0',
                      fontSize: '1.5rem'
                    }}>
                      {stat.icon}
                    </div>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '800',
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      fontFamily: '"Poppins", sans-serif'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#e0e0e0',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio & Skills */}
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Bio Section */}
            <div>
              <motion.h3 
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#ffffff',
                  fontFamily: '"Poppins", sans-serif'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                The Journey
              </motion.h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                fontSize: '1.125rem',
                color: '#b3b3b3',
                fontFamily: '"Inter", sans-serif',
                lineHeight: '1.7'
              }}>
                <p>
                  Hi! I'm <span style={{ color: '#fff', fontWeight: '700' }}>Devashish</span>, a passionate 
                  <span style={{ color: '#e0e0e0', fontWeight: '600' }}> AI Agent Developer</span> and 
                  <span style={{ color: '#e0e0e0', fontWeight: '600' }}> MERN Stack engineer</span> with a keen 
                  interest in fintech and emerging technologies.
                </p>
                <p>
                  I love building intelligent, scalable, and impactful digital products that solve real-world problems. 
                  My expertise spans across modern web technologies, artificial intelligence, and financial technology solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or enjoying music and chess. I believe in continuous learning and pushing the boundaries of what's possible.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <motion.h3 
                style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#ffffff',
                  fontFamily: '"Poppins", sans-serif'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Skills & Expertise
              </motion.h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    style={{ width: '100%' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <div style={{
                          color: '#e0e0e0',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {skill.icon}
                        </div>
                        <span style={{
                          color: '#fff',
                          fontWeight: '600',
                          fontSize: '1rem',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                          {skill.name}
                        </span>
                      </div>
                      <span style={{
                        color: '#e0e0e0',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: '#333',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #e0e0e0 0%, #b3b3b3 100%)',
                          borderRadius: '4px'
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          style={{ marginTop: '4rem' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '3rem',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Career Journey
          </motion.h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                style={{
                  padding: '2rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    padding: '0.75rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    color: '#e0e0e0',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      fontFamily: '"Poppins", sans-serif'
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#e0e0e0',
                      fontWeight: '600'
                    }}>
                      {item.year}
                    </div>
                  </div>
                </div>
                <p style={{
                  color: '#e0e0e0',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          style={{ 
            textAlign: 'center', 
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'linear-gradient(135deg, #e0e0e0 0%, #b3b3b3 100%)',
              color: '#222',
              border: 'none',
              borderRadius: '12px',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              fontFamily: '"Inter", sans-serif',
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
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}