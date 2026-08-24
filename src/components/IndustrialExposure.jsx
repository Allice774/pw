import React from 'react';
import { Building2, Award, ArrowUpRight } from 'lucide-react';

const IndustrialExposure = () => {
  return (
    <section id="exposure" className="exposure-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2>Industrial Exposure</h2>
          <p className="section-subtitle">Bridge between academic studies and professional engineering culture.</p>
        </div>

        <div className="exposure-grid grid-2">
          <div className="exposure-text card">
            <div className="exposure-badge">
              <Building2 size={16} /> Industrial Visit
            </div>
            <h3 className="exposure-title">Rakuten Bangalore</h3>
            <p className="exposure-desc">
              Participated in an industrial visit to Rakuten, Bangalore, gaining exposure to a professional technology environment and workplace practices.
            </p>
            
            <div className="exposure-recognition-box">
              <Award className="recognition-icon" size={20} />
              <div className="recognition-details">
                <h4>Professional Recognition</h4>
                <p>Received an official certificate for the industrial visit representing active participation.</p>
              </div>
            </div>
          </div>

          <div className="exposure-visual card">
            {/* Elegant Minimalist Office building SVG Graphic */}
            <svg viewBox="0 0 400 300" width="100%" height="100%" className="office-svg">
              <defs>
                <linearGradient id="officeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fdf2f8" />
                  <stop offset="100%" stopColor="#fbcfe8" />
                </linearGradient>
                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fffcf9" />
                  <stop offset="100%" stopColor="#f5efe6" />
                </linearGradient>
              </defs>

              {/* Sky background */}
              <rect width="400" height="300" rx="16" fill="url(#skyGrad)" />
              
              {/* Decorative Sun */}
              <circle cx="320" cy="80" r="25" fill="#fbcfe8" opacity="0.4" />
              
              {/* Office Building Base Shape */}
              <path d="M 80,260 L 80,100 L 220,100 L 220,260 Z" fill="url(#officeGrad)" stroke="#f472b6" strokeWidth="1.5" />
              <path d="M 220,260 L 220,130 L 320,130 L 320,260 Z" fill="#fff" stroke="#fbcfe8" strokeWidth="1.5" />

              {/* Glass Windows Grid */}
              <g fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.6">
                {/* Building 1 windows */}
                <line x1="110" y1="100" x2="110" y2="260" />
                <line x1="140" y1="100" x2="140" y2="260" />
                <line x1="170" y1="100" x2="170" y2="260" />
                <line x1="200" y1="100" x2="200" y2="260" />
                
                <line x1="80" y1="130" x2="220" y2="130" />
                <line x1="80" y1="160" x2="220" y2="160" />
                <line x1="80" y1="190" x2="220" y2="190" />
                <line x1="80" y1="220" x2="220" y2="220" />
                
                {/* Building 2 windows */}
                <line x1="250" y1="130" x2="250" y2="260" />
                <line x1="280" y1="130" x2="280" y2="260" />
                
                <line x1="220" y1="165" x2="320" y2="165" />
                <line x1="220" y1="200" x2="320" y2="200" />
                <line x1="220" y1="235" x2="320" y2="235" />
              </g>

              {/* Decorative Tech Network Dots over Building */}
              <circle cx="110" cy="130" r="4" fill="#f472b6" />
              <circle cx="170" cy="190" r="4" fill="#f472b6" />
              <circle cx="280" cy="165" r="4" fill="#fbcfe8" />
              <line x1="110" y1="130" x2="170" y2="190" stroke="#f472b6" strokeWidth="1" strokeDasharray="2,2" />

              {/* Entrance Gate */}
              <rect x="135" y="230" width="30" height="30" rx="4" fill="#fff" stroke="#f472b6" strokeWidth="1.5" />
              
              {/* Ground floor line */}
              <line x1="50" y1="260" x2="350" y2="260" stroke="#f472b6" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .exposure-section {
          background-color: var(--bg-primary);
        }

        .exposure-grid {
          align-items: stretch;
        }

        .exposure-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 2.5rem;
          height: 100%;
        }

        .exposure-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--accent-pink-light);
          border: 1px solid var(--accent-pink-border);
          color: var(--accent-pink-hover);
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .exposure-title {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .exposure-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .exposure-recognition-box {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          background-color: var(--bg-secondary);
          border: 1px solid var(--grey-border);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          width: 100%;
          transition: var(--transition-normal);
        }

        .exposure-recognition-box:hover {
          border-color: var(--accent-pink-border);
          background-color: var(--accent-pink-light);
        }

        .recognition-icon {
          color: var(--accent-pink-hover);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .recognition-details h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .recognition-details p {
          font-size: 0.85rem;
          line-height: 1.4;
          color: var(--text-secondary);
        }

        .exposure-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background-color: var(--bg-secondary);
        }

        .office-svg {
          max-width: 100%;
          height: auto;
          filter: drop-shadow(var(--shadow-sm));
        }
      `}</style>
    </section>
  );
};

export default IndustrialExposure;
