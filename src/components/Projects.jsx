import React from 'react';
import { Trophy, Code, Terminal, Cpu } from 'lucide-react';
import { Github } from './BrandIcons';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Dustbin",
      badge: "4th Prize Award",
      description: "An Arduino-based automated waste segregation system using an ultrasonic sensor, soil moisture sensor, and servo motor to detect waste and separate it into wet and dry categories.",
      technologies: ["Arduino", "C/C++", "Ultrasonic Sensor", "Soil Moisture Sensor", "Servo Motor"],
      achievement: "Secured 4th Prize and received a certificate of recognition.",
      features: null,
      icon: <Cpu className="project-card-icon" />
    },
    {
      id: 2,
      title: "SpendWise",
      badge: null,
      description: "A monthly expense tracking application developed to record and manage personal expenses.",
      technologies: [], // No technologies provided, do not invent
      achievement: null,
      features: null,
      icon: <Terminal className="project-card-icon" />
    },
    {
      id: 3,
      title: "2D Graphics Editor",
      badge: "C Language",
      description: "A C-based graphics editor using a 2D character-array canvas with support for drawing lines, circles, rectangles, and triangles.",
      technologies: ["C"],
      achievement: null,
      features: [
        "Line drawing",
        "Circle drawing",
        "Rectangle drawing",
        "Triangle drawing",
        "2D character-array canvas"
      ],
      icon: <Code className="project-card-icon" />
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Academic and personal hardware and software engineering projects.</p>
        </div>

        <div className="projects-grid grid-3">
          {projects.map((proj) => (
            <div key={proj.id} className={`project-card card ${proj.achievement ? 'award-project-card' : ''}`}>
              <div className="project-card-header">
                <div className="proj-icon-wrapper">{proj.icon}</div>
                {proj.badge && <span className="proj-badge">{proj.badge}</span>}
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>

              {/* Technologies */}
              {proj.technologies.length > 0 && (
                <div className="project-tech-wrapper">
                  <h4 className="project-sub-label">Technologies:</h4>
                  <div className="project-tech-tags">
                    {proj.technologies.map((t, idx) => (
                      <span key={idx} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features (if any) */}
              {proj.features && (
                <div className="project-features-wrapper">
                  <h4 className="project-sub-label">Key Features:</h4>
                  <ul className="project-features-list">
                    {proj.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievement display */}
              {proj.achievement && (
                <div className="project-achievement-box">
                  <Trophy className="trophy-icon" size={18} />
                  <div>
                    <h5 className="achievement-title">Recognition</h5>
                    <p className="achievement-text">{proj.achievement}</p>
                  </div>
                </div>
              )}

              {/* GitHub Button Placeholder */}
              <div className="project-footer">
                <button className="btn-project-placeholder" disabled>
                  <Github size={16} /> Repository Link (Private)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-secondary);
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .award-project-card {
          border-color: var(--accent-pink-border);
          box-shadow: 0 10px 25px -5px rgba(244, 114, 182, 0.15);
        }

        .project-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .proj-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background-color: var(--accent-pink-light);
          color: var(--accent-pink-hover);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-card-icon {
          width: 22px;
          height: 22px;
        }

        .proj-badge {
          background-color: var(--accent-pink-light);
          color: var(--accent-pink-hover);
          border: 1px solid var(--accent-pink-border);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
        }

        .project-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .project-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-sub-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .project-tech-wrapper {
          margin-bottom: 1.25rem;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tech-tag {
          font-size: 0.75rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--grey-border);
          color: var(--text-secondary);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-weight: 500;
        }

        .project-features-wrapper {
          margin-bottom: 1.25rem;
        }

        .project-features-list {
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        /* Achievement box styling */
        .project-achievement-box {
          background: linear-gradient(135deg, var(--accent-pink-light) 0%, rgba(255, 255, 255, 0.9) 100%);
          border: 1px dashed var(--accent-pink);
          border-radius: var(--radius-sm);
          padding: 0.9rem;
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .trophy-icon {
          color: #d97706; /* Golden yellow accent for the trophy */
          flex-shrink: 0;
          margin-top: 2px;
        }

        .achievement-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .achievement-text {
          font-size: 0.8rem;
          line-height: 1.4;
          color: var(--text-secondary);
        }

        .project-footer {
          margin-top: auto;
          padding-top: 1rem;
        }

        .btn-project-placeholder {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.65rem 1rem;
          font-size: 0.85rem;
          background-color: var(--grey-light);
          color: var(--text-secondary);
          border: 1px solid var(--grey-border);
          border-radius: 8px;
          cursor: not-allowed;
          font-weight: 500;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
};

export default Projects;
