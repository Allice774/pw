import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error once user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitted(true);
      // Reset form fields
      setFormData({ name: '', email: '', message: '' });
      // Hide success notification after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2>Let's Connect</h2>
          <p className="section-subtitle">Reach out for inquiries, internship opportunities, or collaborations.</p>
        </div>

        <div className="contact-grid grid-2">
          {/* Info Side */}
          <div className="contact-info-panel">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-sub-text">Feel free to reach out via email or phone. I will get back to you as soon as possible.</p>

            <div className="info-cards-list">
              <a href="mailto:alliceanjani774@gmail.com" className="info-item-card">
                <div className="info-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="info-content">
                  <span>Email Me</span>
                  <p>alliceanjani774@gmail.com</p>
                </div>
              </a>

              <a href="tel:9789627566" className="info-item-card">
                <div className="info-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div className="info-content">
                  <span>Call/Text Me</span>
                  <p>9789627566</p>
                </div>
              </a>

              <div className="info-item-card static-card">
                <div className="info-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="info-content">
                  <span>Location</span>
                  <p>Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>

            <div className="social-links-block">
              <h4>Social Profiles</h4>
              <div className="social-links-row">
                <a 
                  href="https://github.com/Allice774" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-card-btn"
                >
                  <Github size={20} /> <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/r-allice-anjani-40126b336/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-card-btn"
                >
                  <Linkedin size={20} /> <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-panel card">
            <h3 className="contact-heading">Send a Message</h3>
            <p className="contact-sub-text">Fill out the form below to get in touch directly.</p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`form-input-field ${errors.name ? 'form-input-error' : ''}`}
                  required
                />
                {errors.name && <span className="error-message-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`form-input-field ${errors.email ? 'form-input-error' : ''}`}
                  required
                />
                {errors.email && <span className="error-message-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className={`form-input-field form-textarea-field ${errors.message ? 'form-input-error' : ''}`}
                  required
                />
                {errors.message && <span className="error-message-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={16} />
              </button>
            </form>

            {/* Success popup toast */}
            {isSubmitted && (
              <div className="success-popup-alert">
                <CheckCircle className="success-alert-icon" size={24} />
                <div className="success-alert-content">
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. (Mock transmission: backend database integrations can be added later).</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-primary);
        }

        .contact-heading {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .contact-sub-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .info-item-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background-color: var(--bg-card);
          border: 1px solid var(--grey-border);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          transition: var(--transition-normal);
        }

        .info-item-card:hover {
          border-color: var(--accent-pink-border);
          background-color: var(--accent-pink-light);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .static-card:hover {
          transform: none;
          box-shadow: var(--shadow-sm);
          background-color: var(--bg-card);
          border-color: var(--grey-border);
        }

        .info-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--accent-pink-light);
          color: var(--accent-pink-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-content span {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--accent-pink-hover);
          margin-bottom: 0.15rem;
        }

        .info-content p {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .social-links-block h4 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .social-links-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .social-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--bg-card);
          border: 1px solid var(--grey-border);
          color: var(--text-secondary);
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition-normal);
        }

        .social-card-btn:hover {
          color: var(--accent-pink-hover);
          border-color: var(--accent-pink-border);
          background-color: var(--accent-pink-light);
          transform: translateY(-2px);
        }

        /* Form Styling */
        .contact-form-panel {
          position: relative;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-input-field {
          background-color: var(--bg-primary);
          border: 1px solid var(--grey-border);
          border-radius: var(--radius-sm);
          padding: 0.8rem 1rem;
          font-family: inherit;
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          transition: var(--transition-normal);
        }

        .form-input-field:focus {
          border-color: var(--accent-pink-border);
          background-color: white;
          box-shadow: 0 0 0 4px rgba(244, 114, 182, 0.1);
        }

        .form-input-error {
          border-color: #ef4444;
        }

        .form-textarea-field {
          resize: vertical;
        }

        .error-message-text {
          font-size: 0.75rem;
          color: #ef4444;
          font-weight: 500;
        }

        .submit-btn {
          align-self: flex-start;
          width: 100%;
        }

        @media (min-width: 640px) {
          .submit-btn {
            width: auto;
          }
        }

        /* Success toast popup */
        .success-popup-alert {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          right: 2rem;
          background-color: #ecfdf5;
          border: 1px solid #10b981;
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          box-shadow: var(--shadow-lg);
          z-index: 10;
          animation: slide-up-alert 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slide-up-alert {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-alert-icon {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .success-alert-content {
          text-align: left;
        }

        .success-alert-content h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #065f46;
          margin-bottom: 0.25rem;
        }

        .success-alert-content p {
          font-size: 0.85rem;
          color: #047857;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
};

export default Contact;
