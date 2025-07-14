import { motion } from 'framer-motion';
import { Code, Database, Brain, Palette, Server, Globe, Zap, TrendingUp, Award, Rocket } from 'lucide-react';

const categories = [
  {
    name: 'Frontend Development',
    icon: <Globe style={{ width: '24px', height: '24px', color: '#fff' }} />, // white icon
    color: '#333',
    gradient: '#333',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    name: 'Backend Development',
    icon: <Server style={{ width: '24px', height: '24px', color: '#fff' }} />, // white icon
    color: '#333',
    gradient: '#333',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 92 },
      { name: 'FastAPI', level: 88 },
    ],
  },
  {
    name: 'Database & Cloud',
    icon: <Database style={{ width: '24px', height: '24px', color: '#fff' }} />, // white icon
    color: '#333',
    gradient: '#333',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'AWS', level: 75 },
      { name: 'Firebase', level: 78 },
    ],
  },
  {
    name: 'AI & Machine Learning',
    icon: <Brain style={{ width: '24px', height: '24px', color: '#fff' }} />, // white icon
    color: '#333',
    gradient: '#333',
    skills: [
      { name: 'OpenAI APIs', level: 88 },
      { name: 'TensorFlow', level: 80 },
      { name: 'LangChain', level: 85 },
      { name: 'Hugging Face', level: 82 },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: <Code style={{ width: '24px', height: '24px', color: '#fff' }} />, // white icon
    color: '#333',
    gradient: '#333',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'CI/CD', level: 82 },
      { name: 'Vercel', level: 90 },
    ],
  },
  {
    name: 'Design & UX',
    icon: <Palette style={{ width: '24px', height: '24px', color: '#fff' }} />, // white icon
    color: '#333',
    gradient: '#333',
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
            top: '20%',
            right: '5%',
            width: '25rem',
            height: '25rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            borderRadius: '50%',
            filter: 'blur(100px)'
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '30%',
            left: '10%',
            width: '20rem',
            height: '20rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
              My Expertise
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
            Tech Stack
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
            Technologies and tools I use to bring ideas to life. From frontend frameworks 
            to AI integration, here's my technical expertise.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { icon: <Rocket size={32} />, label: 'Years Experience', value: '3+' },
            { icon: <TrendingUp size={32} />, label: 'Projects Completed', value: '50+' },
            { icon: <Award size={32} />, label: 'Technologies', value: '25+' },
            { icon: <Zap size={32} />, label: 'Certifications', value: '8+' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <div style={{ 
                color: '#ffffff',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#ffffff',
                fontFamily: '"Poppins", sans-serif',
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#a3a3a3',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2.5rem'
        }}>
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name} 
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                background: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.2)'
              }}
            >
              {/* Category header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  padding: '1rem',
                  borderRadius: '16px',
                  background: category.gradient,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  fontFamily: '"Poppins", sans-serif'
                }}>
                  {category.name}
                </h3>
              </div>

              {/* Skills list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name} 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '0.75rem',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    whileHover={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <span style={{ fontSize: '1.25rem' }}>{skill.icon}</span>
                        <span style={{
                          fontWeight: '600',
                          color: '#ffffff',
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '1rem'
                        }}>
                          {skill.name}
                        </span>
                      </div>
                      <span style={{
                        fontSize: '0.875rem',
                        color: '#ffffff',
                        fontWeight: '700',
                        background: '#444',
                        padding: '0.5rem 1rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px #222'
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar container */}
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '10px',
                      backgroundColor: '#444',
                      borderRadius: '9999px',
                      overflow: 'hidden'
                    }}>
                      {/* Animated progress bar */}
                      <motion.div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          height: '100%',
                          background: category.gradient,
                          borderRadius: '9999px',
                          boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 2, 
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
                          background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
                          transform: 'skewX(-12deg)'
                        }}
                        animate={{ 
                          x: ['-100%', '200%']
                        }}
                        transition={{ 
                          duration: 2,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 1,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          style={{ 
            textAlign: 'center', 
            marginTop: '4rem',
            padding: '3rem',
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
          <motion.h3 
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif',
              marginBottom: '1rem'
            }}
          >
            Ready to Build Something Amazing?
          </motion.h3>
          <motion.p 
            style={{
              fontSize: '1.125rem',
              color: '#b3b3b3',
              marginBottom: '2rem',
              fontFamily: '"Inter", sans-serif',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}
          >
            I'm always learning and exploring new technologies. Let's discuss how we can bring your ideas to life with the latest tech stack.
          </motion.p>
          <motion.a 
            href="#contact"
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
              boxShadow: '0 6px 25px rgba(255, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap size={20} />
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}