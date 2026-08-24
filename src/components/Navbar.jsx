import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          R. Allice Anjani
        </a>

        {/* Desktop Menu */}
        <nav className="navbar-desktop">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`navbar-link ${activeSection === item.id ? 'navbar-link-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-mobile-drawer ${isOpen ? 'drawer-open' : ''}`}>
        <nav className="navbar-mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`navbar-mobile-link ${activeSection === item.id ? 'navbar-mobile-link-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: transparent;
          transition: var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          background-color: rgba(255, 252, 249, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--accent-pink-border);
          box-shadow: var(--shadow-sm);
        }

        .navbar-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: var(--transition-normal);
        }

        .navbar-scrolled .navbar-container {
          padding: 0.9rem 1.5rem;
        }

        .navbar-logo {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.5px;
          position: relative;
        }

        .navbar-logo::after {
          content: '.';
          color: var(--accent-pink);
        }

        .navbar-desktop {
          display: none;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .navbar-desktop {
            display: flex;
          }
        }

        .navbar-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 0.25rem 0;
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent-pink);
          transition: var(--transition-normal);
        }

        .navbar-link:hover {
          color: var(--text-primary);
        }

        .navbar-link:hover::after {
          width: 100%;
        }

        .navbar-link-active {
          color: var(--text-primary);
          font-weight: 600;
        }

        .navbar-link-active::after {
          width: 100%;
          background-color: var(--accent-pink);
        }

        .navbar-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
          transition: var(--transition-fast);
        }

        .navbar-toggle:hover {
          color: var(--accent-pink);
        }

        @media (min-width: 1024px) {
          .navbar-toggle {
            display: none;
          }
        }

        /* Mobile Drawer */
        .navbar-mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 320px;
          height: 100vh;
          background-color: var(--bg-primary);
          box-shadow: var(--shadow-lg);
          z-index: 999;
          transition: var(--transition-slow);
          padding: 6rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--accent-pink-border);
        }

        .drawer-open {
          right: 0;
        }

        .navbar-mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .navbar-mobile-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--grey-light);
        }

        .navbar-mobile-link:hover, .navbar-mobile-link-active {
          color: var(--text-primary);
          border-bottom-color: var(--accent-pink);
          padding-left: 4px;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
