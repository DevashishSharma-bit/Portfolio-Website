import { Github, ExternalLink, Star, GitFork, Eye, Calendar, Users, Zap, Code, Brain, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Chatbot Platform',
    description: 'A scalable AI chatbot platform for businesses, featuring advanced NLP capabilities, real-time analytics, and seamless third-party integrations.',
    tech: ['React', 'Node.js', 'Python', 'OpenAI', 'MongoDB'],
    github: '#',
    demo: '#',
    stars: 124,
    forks: 32,
    views: 2500,
    featured: true,
    image: <Brain size={36} color="#fff" />, // Lucide icon
    category: 'AI/ML',
    year: '2024'
  },
  {
    title: 'Fintech Dashboard',
    description: 'A comprehensive real-time dashboard for fintech analytics with interactive charts, secure authentication, and advanced data visualization.',
    tech: ['React', 'D3.js', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
    stars: 89,
    forks: 21,
    views: 1800,
    featured: true,
    image: <Code size={36} color="#fff" />, // Lucide icon
    category: 'Fintech',
    year: '2024'
  },
  {
    title: 'E-commerce API',
    description: 'RESTful API for e-commerce platform with user authentication, payment processing, and inventory management.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
    github: '#',
    demo: '#',
    stars: 45,
    forks: 12,
    views: 1200,
    featured: true,
    image: <Server size={36} color="#fff" />, // Lucide icon
    category: 'Backend',
    year: '2023'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
    github: '#',
    demo: '#',
    stars: 38,
    forks: 9,
    views: 950,
    featured: true,
    image: <Code size={36} color="#fff" />, // Lucide icon
    category: 'Full Stack',
    year: '2023'
  },
];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 4);

  return (
    <motion.section
      id="projects"
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
            top: '15%',
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
            bottom: '25%',
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
              My Work
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
            Featured Projects
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
            Here are some of my recent projects that showcase my skills in web development, 
            AI integration, and modern technologies.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '3rem'
        }}>
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                background: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.2)'
              }}
            >
              {/* Project header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                  }}>
                    {project.image}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      fontFamily: '"Poppins", sans-serif',
                      marginBottom: '0.25rem'
                    }}>
                      {project.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      fontSize: '0.875rem',
                      color: '#a3a3a3'
                    }}>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        background: '#444',
                        borderRadius: '12px',
                        fontWeight: '600'
                      }}>
                        {project.category}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={14} />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Featured badge */}
                <div style={{
                  padding: '0.5rem 1rem',
                  background: '#fff',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#333',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Featured
                </div>
              </div>

              {/* Description */}
              <p style={{
                color: '#fff',
                fontFamily: '"Inter", sans-serif',
                fontWeight: '500',
                fontSize: '1rem',
                marginBottom: '0.25rem'
              }}>
                {project.description}
              </p>

              {/* Tech stack */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '2rem'
              }}>
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '12px',
                      background: '#444',
                      border: '1px solid #888',
                      color: '#fff',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#fff';
                      e.target.style.borderColor = '#333';
                      e.target.style.color = '#333';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#444';
                      e.target.style.borderColor = '#888';
                      e.target.style.color = '#fff';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                marginBottom: '2rem',
                padding: '1rem',
                background: '#444',
                borderRadius: '12px',
                border: '1px solid #888'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                  <Star size={16} style={{ color: '#fff' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{project.stars}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                  <GitFork size={16} style={{ color: '#fff' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{project.forks}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                  <Eye size={16} style={{ color: '#fff' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{project.views}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <motion.a 
                  href={project.github} 
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: '#444',
                    border: '1px solid #888',
                    borderRadius: '12px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontFamily: '"Inter", sans-serif',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    background: '#888',
                    borderColor: '#333',
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
                <motion.a 
                  href={project.demo} 
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#333',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontFamily: '"Inter", sans-serif',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px #222'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    boxShadow: '0 6px 25px #444'
                  }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          style={{ 
            textAlign: 'center', 
            marginTop: '4rem',
            padding: '2rem',
            background: '#333',
            border: '1px solid #444',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            style={{
              fontSize: '1.125rem',
              color: '#b3b3b3',
              marginBottom: '1.5rem',
              fontFamily: '"Inter", sans-serif'
            }}
          >
            Want to see more of my work?
          </motion.p>
          <motion.a 
            href="https://github.com/DevashishSharma-bit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: '#fff',
              color: '#333',
              border: 'none',
              borderRadius: '12px',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              fontFamily: '"Inter", sans-serif',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px #222'
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: '0 6px 25px #444'
            }}
            whileTap={{ scale: 0.95 }}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Zap size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}