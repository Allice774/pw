import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import IndustrialExposure from './components/IndustrialExposure';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const revealSections = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, no need to track it anymore
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" // triggers slightly before entering screen center
    });

    revealSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      revealSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        
        <div className="reveal-on-scroll scroll-reveal-fade">
          <About />
        </div>

        <div className="reveal-on-scroll scroll-reveal-fade">
          <Education />
        </div>

        <div className="reveal-on-scroll scroll-reveal-fade">
          <Skills />
        </div>

        <div className="reveal-on-scroll scroll-reveal-fade">
          <Projects />
        </div>

        <div className="reveal-on-scroll scroll-reveal-fade">
          <Certifications />
        </div>

        <div className="reveal-on-scroll scroll-reveal-fade">
          <IndustrialExposure />
        </div>

        <div className="reveal-on-scroll scroll-reveal-fade">
          <Achievements />
        </div>

        <div className="reveal-on-scroll scroll-reveal-fade">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <style>{`
        /* Scroll Reveal Transitions */
        .scroll-reveal-fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .scroll-reveal-fade.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default App;
