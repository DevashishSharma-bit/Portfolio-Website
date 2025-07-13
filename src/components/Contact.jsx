import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  { 
    icon: <Mail style={{ width: '20px', height: '20px' }} />, 
    label: 'Email', 
    value: 'devashishsharma860@email.com',
    href: 'mailto:devashishsharma860@email.com'
  },
  { 
    icon: <Phone style={{ width: '20px', height: '20px' }} />, 
    label: 'Phone', 
    value: '+91 81467 95946',
    href: 'tel:+91 81467 95946'
  },
  { 
    icon: <MapPin style={{ width: '20px', height: '20px' }} />, 
    label: 'Location', 
    value: 'India',
    href: 'https://www.google.com/maps/@19.042516,73.1031164,16z?entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D'
  },
];

const socials = [
  { 
    icon: <Linkedin style={{ width: '20px', height: '20px' }} />, 
    label: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/devashish-sharma-bit/',
    username: '@devashish'
  },
  { 
    icon: <Github style={{ width: '20px', height: '20px' }} />, 
    label: 'GitHub', 
    url: 'https://github.com/DevashishSharma-bit',
    username: '@devashish'
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
          Get In Touch
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
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Let's create something amazing together.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '3rem'
      }}>
        {/* Contact Information */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif'
            }}>
              Contact Information
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#333333';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#1e1e1e';
                  }}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div style={{
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#2a2a2a',
                    color: '#ffffff',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#333333';
                    e.target.style.color = '#e5e5e5';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2a2a2a';
                    e.target.style.color = '#ffffff';
                  }}
                  >
                    {info.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#737373',
                      fontWeight: '500'
                    }}>{info.label}</div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        style={{
                          color: '#ffffff',
                          fontFamily: '"Inter", sans-serif',
                          textDecoration: 'none',
                          transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span style={{
                        color: '#ffffff',
                        fontFamily: '"Inter", sans-serif'
                      }}>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif'
            }}>
              Connect With Me
            </h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socials.map((social, index) => (
                <a 
                  key={social.label} 
                  href={social.url} 
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    flex: 1
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#333333';
                    e.target.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#1e1e1e';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div style={{
                    color: '#ffffff',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#e5e5e5'}
                  onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <div style={{
                      fontWeight: '600',
                      color: '#ffffff',
                      fontFamily: '"Inter", sans-serif',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                    >
                      {social.label}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#737373'
                    }}>
                      {social.username}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Additional info */}
          <div className="card" style={{
            background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
            borderColor: '#525252'
          }}>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: '#ffffff',
              fontFamily: '"Poppins", sans-serif'
            }}>
              Let's Build Something Great
            </h4>
            <p style={{
              color: '#b3b3b3',
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.875rem',
              lineHeight: '1.75'
            }}>
              I'm always open to discussing new opportunities, creative projects, 
              or potential collaborations. Whether you have a specific project in mind 
              or just want to connect, feel free to reach out!
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="card" data-aos="fade-left">
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#ffffff',
            fontFamily: '"Poppins", sans-serif'
          }}>
            Send Message
          </h3>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Inter", sans-serif'
              }}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="input-field"
                style={{ width: '100%' }}
                value={form.name}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            <div>
              <label htmlFor="email" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Inter", sans-serif'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="input-field"
                style={{ width: '100%' }}
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            <div>
              <label htmlFor="message" style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#ffffff',
                marginBottom: '0.5rem',
                fontFamily: '"Inter", sans-serif'
              }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello..."
                className="input-field"
                style={{
                  width: '100%',
                  minHeight: '120px',
                  resize: 'none'
                }}
                value={form.message}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            {/* Error message */}
            {error && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '0.5rem',
                color: '#f87171',
                fontSize: '0.875rem'
              }}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {/* Success message */}
            {success && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '0.5rem',
                color: '#4ade80',
                fontSize: '0.875rem'
              }}>
                <CheckCircle size={16} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #0f0f0f',
                    borderTop: 'transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} style={{
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translate(2px, -2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translate(0, 0)';
                  }}
                  />
                  Send Message
                </>
              )}
            </button>
          </form>
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
          left: '25%',
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '20rem',
          height: '20rem',
          backgroundColor: 'rgba(229, 229, 229, 0.02)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
      </div>
    </motion.section>
  );
}