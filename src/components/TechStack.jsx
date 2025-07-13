import { motion } from 'framer-motion';
import { Code, Database, Brain, Palette, Server, Globe } from 'lucide-react';

const categories = [
  {
    name: 'Frontend',
    icon: <Globe style={{ width: '24px', height: '24px' }} />,
    color: 'linear-gradient(135deg, #ffffff, #e5e5e5)',
    skills: [
      { name: 'React', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'TypeScript', level: 88 },
    ],
  },
  {
    name: 'Backend',
    icon: <Server style={{ width: '24px', height: '24px' }} />,
    color: 'linear-gradient(135deg, #e5e5e5, #d4d4d4)',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 92 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    name: 'Database',
    icon: <Database style={{ width: '24px', height: '24px' }} />,
    color: 'linear-gradient(135deg, #d4d4d4, #ffffff)',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Redis', level: 70 },
      { name: 'Firebase', level: 78 },
    ],
  },
  {
    name: 'AI/ML',
    icon: <Brain style={{ width: '24px', height: '24px' }} />,
    color: 'linear-gradient(135deg, #ffffff, #e5e5e5)',
    skills: [
      { name: 'OpenAI APIs', level: 88 },
      { name: 'TensorFlow', level: 80 },
      { name: 'Langchain', level: 85 },
      { name: 'Hugging Face', level: 82 },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: <Code style={{ width: '24px', height: '24px' }} />,
    color: 'linear-gradient(135deg, #e5e5e5, #d4d4d4)',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 75 },
      { name: 'Vercel', level: 90 },
    ],
  },
  {
    name: 'Design',
    icon: <Palette style={{ width: '24px', height: '24px' }} />,
    color: 'linear-gradient(135deg, #d4d4d4, #ffffff)',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Accessibility', level: 88 },
    ],
  },
];

export default function TechStack() {
  return (
    <motion.section
      id="tech"
      className="container-max section-padding"
      data-aos="fade-up"
      style={{ position: 'relative' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: 'clamp(2.25rem, 4vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#ffffff',
          fontFamily: '"Poppins", sans-serif'
        }}>
          Tech Stack
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
          Technologies and tools I use to bring ideas to life. From frontend frameworks 
          to AI integration, here's my technical expertise.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {categories.map((category, categoryIndex) => (
          <motion.div 
            key={category.name} 
            className="card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.5s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#333333';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1e1e1e';
              e.target.style.transform = 'translateY(0)';
            }}
            data-aos="fade-up"
            data-aos-delay={categoryIndex * 100}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                background: `${category.color}`,
                opacity: 0.1,
                color: '#ffffff',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.2'}
              onMouseLeave={(e) => e.target.style.opacity = '0.1'}
              >
                {category.icon}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#ffffff',
                fontFamily: '"Poppins", sans-serif',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#e5e5e5'}
              onMouseLeave={(e) => e.target.style.color = '#ffffff'}
              >
                {category.name}
              </h3>
            </div>

            {/* Skills list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontWeight: '500',
                      color: '#ffffff',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.875rem'
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#ffffff',
                      fontWeight: '600',
                      backgroundColor: '#2a2a2a',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px'
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress bar container */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '9999px',
                    overflow: 'hidden'
                  }}>
                    {/* Background track */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to right, #404040, #525252)',
                      opacity: 0.5
                    }} />
                    
                    {/* Animated progress bar */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        background: category.color,
                        borderRadius: '9999px',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Shimmer effect */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)',
                        transform: 'skewX(-12deg)'
                      }}
                      initial={{ x: '-100%' }}
                      whileInView={{ x: '200%' }}
                      transition={{ 
                        duration: 1.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                        ease: "easeInOut"
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Hover effect overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: category.color,
              opacity: 0,
              transition: 'opacity 0.5s',
              pointerEvents: 'none',
              borderRadius: '0.75rem'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.05'}
            onMouseLeave={(e) => e.target.style.opacity = '0'}
            />
            
            {/* Corner decoration */}
            <div style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            />
          </motion.div>
        ))}
      </div>

      {/* Additional skills section */}
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#ffffff',
          fontFamily: '"Poppins", sans-serif'
        }}>
          Additional Skills & Technologies
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          maxWidth: '64rem',
          margin: '0 auto'
        }}>
          {[
            'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Webpack', 'Vite', 'Jest', 
            'Cypress', 'GraphQL', 'Socket.io', 'JWT', 'OAuth', 'Stripe API',
            'Cloudinary', 'Netlify', 'GitHub Actions', 'Postman', 'VS Code'
          ].map((skill, index) => (
            <motion.span
              key={skill}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#2a2a2a',
                border: '1px solid #404040',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#e5e5e5',
                transition: 'all 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#333333';
                e.target.style.borderColor = '#525252';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#2a2a2a';
                e.target.style.borderColor = '#404040';
                e.target.style.color = '#e5e5e5';
                e.target.style.transform = 'scale(1)';
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
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
          top: '33%',
          left: 0,
          width: '18rem',
          height: '18rem',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '33%',
          right: 0,
          width: '16rem',
          height: '16rem',
          backgroundColor: 'rgba(229, 229, 229, 0.03)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
      </div>
    </motion.section>
  );
}