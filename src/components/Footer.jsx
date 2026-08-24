import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Footer = () => {
  const currentYear = 2026; // Static copyright year as requested: © 2026 R. Allice Anjani

  return (
    <footer className="footer-panel">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-info">
            <h3 className="footer-brand-name">R. Allice Anjani</h3>
            <p className="footer-brand-desc">B.Tech – Artificial Intelligence & Data Science</p>
            <p className="footer-brand-univ">REVA University</p>
          </div>

          <div className="footer-social-icons">
            <a 
              href="https://github.com/Allice774" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/r-allice-anjani-40126b336/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:alliceanjani774@gmail.com" 
              className="footer-social-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-separator"></div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; {currentYear} R. Allice Anjani. All rights reserved.
          </p>
          <p className="footer-tagline">
            Designed with ♥ and minimal pink accents.
          </p>
        </div>
      </div>

      <style>{`
        .footer-panel {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--grey-border);
          padding: 3rem 0 2rem;
          color: var(--text-secondary);
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-top-row {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        @media (min-width: 640px) {
          .footer-top-row {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
          }
        }

        .footer-brand-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .footer-brand-name::after {
          content: '.';
          color: var(--accent-pink);
        }

        .footer-brand-desc {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .footer-brand-univ {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .footer-social-icons {
          display: flex;
          gap: 0.75rem;
        }

        .footer-social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--grey-border);
          background-color: var(--bg-card);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
        }

        .footer-social-link:hover {
          color: var(--accent-pink-hover);
          border-color: var(--accent-pink-border);
          background-color: var(--accent-pink-light);
          transform: translateY(-2px);
        }

        .footer-separator {
          height: 1px;
          background-color: var(--grey-border);
          width: 100%;
        }

        .footer-bottom-row {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
        }

        @media (min-width: 640px) {
          .footer-bottom-row {
            flex-direction: row;
          }
        }

        .copyright-text {
          font-weight: 500;
        }

        .footer-tagline {
          font-style: italic;
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
