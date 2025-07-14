import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle, AlertCircle, MessageCircle, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  { 
    icon: <Mail style={{ width: '20px', height: '20px' }} />, 
    label: 'Email', 
    value: 'devashishsharma860@email.com',
    href: 'mailto:devashishsharma860@email.com',
    description: 'Send me an email anytime'
  },
  { 
    icon: <Phone style={{ width: '20px', height: '20px' }} />, 
    label: 'Phone', 
    value: '+91 81467 95946',
    href: 'tel:+91 81467 95946',
    description: 'Call me directly'
  },
  { 
    icon: <MapPin style={{ width: '20px', height: '20px' }} />, 
    label: 'Location', 
    value: 'India',
    href: 'https://www.google.com/maps/@19.042516,73.1031164,16z?entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D',
    description: 'Based in India'
  },
];

const socials = [
  { 
    icon: <Linkedin style={{ width: '20px', height: '20px' }} />, 
    label: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/devashish-sharma-bit/',
    username: '@devashish',
    color: '#0077B5'
  },
  { 
    icon: <Github style={{ width: '20px', height: '20px' }} />, 
    label: 'GitHub', 
    url: 'https://github.com/DevashishSharma-bit',
    username: '@devashish',
    color: '#333333'
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <motion.section
      id="contact"
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
            left: '10%',
            width: '20rem',
            height: '20rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
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
            right: '15%',
            width: '16rem',
            height: '16rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%)',
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
              Let's Connect
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
            Get In Touch
          </motion.h2>

          <motion.p 
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: '#b3b3b3',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: '"Inter", sans-serif',
              lineHeight: '1.6'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </motion.p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Info Cards */}
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
                Contact Information
              </motion.h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      backdropFilter: 'blur(10px)'
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -4,
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div style={{
                      padding: '1rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                      color: '#ffffff',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      {info.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#a3a3a3',
                        fontWeight: '600',
                        marginBottom: '0.25rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {info.label}
                      </div>
                      <div style={{
                        color: '#ffffff',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: '500',
                        fontSize: '1rem',
                        marginBottom: '0.25rem'
                      }}>
                        {info.value}
                      </div>
                      <div style={{
                        color: '#737373',
                        fontSize: '0.875rem',
                        fontFamily: '"Inter", sans-serif'
                      }}>
                        {info.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
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
                Connect With Me
              </motion.h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {socials.map((social, index) => (
                  <motion.a 
                    key={social.label} 
                    href={social.url} 
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      backdropFilter: 'blur(10px)'
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -4,
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    target="_blank" 
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div style={{
                      padding: '0.75rem',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                      color: '#ffffff',
                      transition: 'all 0.3s ease'
                    }}>
                      {social.icon}
                    </div>
                    <div>
                      <div style={{
                        fontWeight: '600',
                        color: '#ffffff',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '1rem',
                        marginBottom: '0.25rem'
                      }}>
                        {social.label}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#a3a3a3'
                      }}>
                        {social.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <motion.div 
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  color: '#ffffff'
                }}>
                  <MessageCircle size={20} />
                </div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  fontFamily: '"Poppins", sans-serif',
                  margin: 0
                }}>
                  Let's Build Something Great
                </h4>
              </div>
              <p style={{
                color: '#b3b3b3',
                fontFamily: '"Inter", sans-serif',
                fontSize: '1rem',
                lineHeight: '1.7',
                margin: 0
              }}>
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Whether you have a specific project in mind 
                or just want to connect, feel free to reach out!
              </p>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
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
              Send Message
            </motion.h3>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  fontFamily: '"Inter", sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontFamily: '"Inter", sans-serif',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  fontFamily: '"Inter", sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontFamily: '"Inter", sans-serif',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  fontFamily: '"Inter", sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  style={{
                    width: '100%',
                    minHeight: '140px',
                    padding: '1rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontFamily: '"Inter", sans-serif',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'none',
                    lineHeight: '1.6'
                  }}
                  value={form.message}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>

              {/* Error message */}
              {error && (
                <motion.div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '12px',
                    color: '#f87171',
                    fontSize: '0.875rem'
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Success message */}
              {success && (
                <motion.div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '12px',
                    color: '#4ade80',
                    fontSize: '0.875rem'
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle size={18} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              <motion.button 
                type="submit" 
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  fontFamily: '"Inter", sans-serif',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: '0 6px 25px rgba(255, 255, 255, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid #000000',
                      borderTop: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}