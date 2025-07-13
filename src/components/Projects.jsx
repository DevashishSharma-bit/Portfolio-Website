import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
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
    featured: true,
  },
  {
    title: 'Fintech Dashboard',
    description: 'A comprehensive real-time dashboard for fintech analytics with interactive charts, secure authentication, and advanced data visualization.',
    tech: ['React', 'D3.js', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
    stars: 89,
    forks: 21,
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with smooth animations, dark theme, and optimized performance.',
    tech: ['React', 'Framer Motion', 'CSS', 'AOS'],
    github: '#',
    demo: '#',
    stars: 67,
    forks: 15,
    featured: true,
  },
  {
    title: 'E-commerce API',
    description: 'RESTful API for e-commerce platform with user authentication, payment processing, and inventory management.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
    github: '#',
    demo: '#',
    stars: 45,
    forks: 12,
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
    github: '#',
    demo: '#',
    stars: 38,
    forks: 9,
    featured: true,
  },
  {
    title: 'Weather Analytics',
    description: 'Weather data analytics platform with predictive modeling, historical data analysis, and interactive visualizations.',
    tech: ['Python', 'Flask', 'TensorFlow', 'Chart.js'],
    github: '#',
    demo: '#',
    stars: 29,
    forks: 7,
    featured: true,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="container-max section-padding" data-aos="fade-up">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: 'clamp(2.25rem, 4vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#ffffff',
          fontFamily: '"Poppins", sans-serif'
        }}>
          Featured Projects
        </h2>
        <div style={{
          width: '6rem',
          height: '4px',
          background: 'linear-gradient(to right, #ffffff, #e5e5e5)',
          borderRadius: '9999px',
          margin: '0 auto 1.5rem auto'
        }} />
        <p style={{
          fontSize: '1.125rem',
          color: '#b3b3b3',
          maxWidth: '42rem',
          margin: '0 auto',
          fontFamily: '"Inter", sans-serif'
        }}>
          Here are some of my recent projects that showcase my skills in web development, 
          AI integration, and modern technologies.
        </p>
      </div>

      {/* Featured Projects */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem'
      }}>
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            style={{ background: '#18181b', borderRadius: '1.5rem', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)', padding: '2rem', position: 'relative', overflow: 'hidden' }}
          >
            {/* Featured badge */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              padding: '0.25rem 0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: '500',
              color: '#ffffff'
            }}>
              Featured
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: '#ffffff',
                  fontFamily: '"Poppins", sans-serif',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e5e5e5'}
                onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                >
                  {project.title}
                </h3>
                <p style={{
                  color: '#b3b3b3',
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: '1.75'
                }}>
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: '#2a2a2a',
                      border: '1px solid #404040',
                      color: '#e5e5e5',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#333333';
                      e.target.style.borderColor = '#525252';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#2a2a2a';
                      e.target.style.borderColor = '#404040';
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
                gap: '1rem',
                fontSize: '0.875rem',
                color: '#737373'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Star size={16} style={{ color: '#ffffff' }} />
                  <span>{project.stars}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <GitFork size={16} style={{ color: '#ffffff' }} />
                  <span>{project.forks}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                paddingTop: '0.5rem'
              }}>
                <a 
                  href={project.github} 
                  className="btn btn-secondary"
                  style={{ flex: 1, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={18} style={{ transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => e.target.style.transform = 'rotate(12deg)'}
                  onMouseLeave={(e) => e.target.style.transform = 'rotate(0deg)'}
                  /> 
                  GitHub
                </a>
                <a 
                  href={project.demo} 
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} style={{ transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translate(2px, -2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translate(0, 0)';
                  }}
                  /> 
                  Live Demo
                </a>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)',
              opacity: 0,
              transition: 'opacity 0.5s',
              pointerEvents: 'none'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0'}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}