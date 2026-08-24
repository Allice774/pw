import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Hero = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section section">
      {/* Decorative background shapes */}
      <div className="bg-decor bg-decor-left"></div>
      <div className="bg-decor bg-decor-right"></div>
      
      <div className="container hero-container grid-2">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">Welcome to my space</div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">R. Allice Anjani</span> <span className="wave">👋</span>
          </h1>
          <h2 className="hero-subtitle">B.Tech – Artificial Intelligence & Data Science</h2>
          <p className="hero-university">REVA University | School of CSE | 3rd Semester</p>
          
          <p className="hero-description">
            B.Tech student at REVA University pursuing Artificial Intelligence and Data Science, with a strong foundation in C and Python and growing experience in SQL, Git, Data Structures and Algorithms, Artificial Intelligence, and Data Science.
          </p>

          <div className="hero-ctas">
            <a 
              href="#projects" 
              onClick={(e) => handleScrollTo(e, 'projects')} 
              className="btn btn-primary"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')} 
              className="btn btn-secondary"
            >
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a 
              href="https://github.com/Allice774" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn" 
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/r-allice-anjani-40126b336/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn" 
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:alliceanjani774@gmail.com" 
              className="social-btn" 
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-float">
          {/* Aesthetic AI/Data Science SVG Vector Illustration */}
          <svg viewBox="0 0 500 500" width="100%" height="100%" className="hero-svg">
            <defs>
              <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbcfe8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Grid Accent */}
            <g opacity="0.15">
              <path d="M 50,50 L 450,50 M 50,150 L 450,150 M 50,250 L 450,250 M 50,350 L 450,350 M 50,450 L 450,450" stroke="#f472b6" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M 50,50 L 50,450 M 150,50 L 150,450 M 250,50 L 250,450 M 350,50 L 350,450 M 450,50 L 450,450" stroke="#f472b6" strokeWidth="1" strokeDasharray="5,5" />
            </g>

            {/* Orbiting rings */}
            <circle cx="250" cy="250" r="160" fill="none" stroke="#fbcfe8" strokeWidth="2" strokeDasharray="8 8" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="25s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="250" cy="250" r="120" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* Connecting network nodes (representing Data structures / neural net) */}
            <g className="network-nodes" stroke="#f472b6" strokeWidth="1.5">
              <line x1="250" y1="250" x2="160" y2="180" opacity="0.7" />
              <line x1="250" y1="250" x2="340" y2="180" opacity="0.7" />
              <line x1="250" y1="250" x2="310" y2="330" opacity="0.7" />
              <line x1="250" y1="250" x2="180" y2="340" opacity="0.7" />
              
              <line x1="160" y1="180" x2="110" y2="250" opacity="0.5" />
              <line x1="340" y1="180" x2="390" y2="250" opacity="0.5" />
              <line x1="310" y1="330" x2="350" y2="260" opacity="0.5" />
              <line x1="180" y1="340" x2="130" y2="280" opacity="0.5" />
              <line x1="160" y1="180" x2="250" y2="110" opacity="0.5" />
              <line x1="340" y1="180" x2="250" y2="110" opacity="0.5" />
            </g>

            {/* Glowing Main Node */}
            <circle cx="250" cy="250" r="35" fill="url(#pinkGrad)" filter="url(#glow)" />
            <circle cx="250" cy="250" r="15" fill="url(#circleGrad)" />

            {/* Core Neural / AI nodes */}
            <circle cx="160" cy="180" r="8" fill="#fff" stroke="#f472b6" strokeWidth="3" />
            <circle cx="340" cy="180" r="8" fill="#fff" stroke="#f472b6" strokeWidth="3" />
            <circle cx="310" cy="330" r="8" fill="#fff" stroke="#f472b6" strokeWidth="3" />
            <circle cx="180" cy="340" r="8" fill="#fff" stroke="#f472b6" strokeWidth="3" />
            <circle cx="110" cy="250" r="6" fill="#f472b6" />
            <circle cx="390" cy="250" r="6" fill="#f472b6" />
            <circle cx="250" cy="110" r="6" fill="#f472b6" />

            {/* Floating Binary / Code accents */}
            <text x="70" y="150" fill="#f472b6" fontSize="12" fontFamily="monospace" opacity="0.6">01</text>
            <text x="400" y="160" fill="#f472b6" fontSize="12" fontFamily="monospace" opacity="0.6">10</text>
            <text x="90" y="350" fill="#f472b6" fontSize="12" fontFamily="monospace" opacity="0.6">f(x)</text>
            <text x="380" y="380" fill="#f472b6" fontSize="12" fontFamily="monospace" opacity="0.6">∑y</text>
            <text x="240" y="60" fill="#f472b6" fontSize="14" fontFamily="monospace" fontWeight="bold" opacity="0.7">&lt;AI&gt;</text>
          </svg>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 10% 20%, rgba(253, 242, 248, 0.5) 0%, var(--bg-primary) 90%);
          overflow: hidden;
          padding-top: 100px;
        }

        .bg-decor {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.35;
          z-index: 0;
          pointer-events: none;
        }

        .bg-decor-left {
          background-color: var(--accent-pink-border);
          top: -100px;
          left: -100px;
        }

        .bg-decor-right {
          background-color: #f5efe6;
          bottom: -100px;
          right: -100px;
        }

        .hero-container {
          position: relative;
          z-index: 10;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-badge {
          background-color: var(--accent-pink-light);
          border: 1px solid var(--accent-pink-border);
          color: var(--accent-pink-hover);
          padding: 0.35rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 2.75rem;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        .highlight-text {
          color: var(--text-primary);
          position: relative;
          z-index: 1;
        }

        .highlight-text::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 12px;
          background-color: rgba(244, 114, 182, 0.15);
          z-index: -1;
          border-radius: 4px;
        }

        .wave {
          display: inline-block;
          animation: wave-anim 2.5s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave-anim {
          0% { transform: rotate( 0.0deg) }
          10% { transform: rotate(14.0deg) }
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }

        .hero-subtitle {
          font-size: 1.25rem;
          font-family: var(--font-sans);
          font-weight: 500;
          color: var(--accent-pink-hover);
          margin-bottom: 0.5rem;
          border: none;
        }
        
        .hero-subtitle::after {
          display: none; /* remove underline from this subtitle */
        }

        .hero-university {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          max-width: 540px;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .hero-socials {
          display: flex;
          gap: 1rem;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--grey-border);
          background-color: var(--bg-card);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
        }

        .social-btn:hover {
          color: var(--accent-pink-hover);
          border-color: var(--accent-pink-border);
          background-color: var(--accent-pink-light);
          transform: translateY(-3px);
          box-shadow: var(--shadow-sm);
        }

        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 450px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-svg {
          filter: drop-shadow(0 10px 20px rgba(244, 114, 182, 0.1));
        }

        @media (max-width: 767px) {
          .hero-section {
            padding-top: 120px;
            padding-bottom: 4rem;
            min-height: auto;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
          .hero-visual {
            max-width: 320px;
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
