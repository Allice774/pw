import React from 'react';
import { GraduationCap, MapPin, Code2, BarChart3, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="highlight-icon-svg" />,
      title: "B.Tech AI & Data Science",
      subtitle: "REVA University"
    },
    {
      icon: <MapPin className="highlight-icon-svg" />,
      title: "Bengaluru, Karnataka",
      subtitle: "Base Location"
    },
    {
      icon: <Code2 className="highlight-icon-svg" />,
      title: "C & Python",
      subtitle: "Core Languages"
    },
    {
      icon: <BarChart3 className="highlight-icon-svg" />,
      title: "AI & Data Science",
      subtitle: "Specialization"
    },
    {
      icon: <Rocket className="highlight-icon-svg" />,
      title: "Currently Learning DSA",
      subtitle: "Active Focus"
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2>My Journey</h2>
          <p className="section-subtitle">A brief look into my background, focus areas, and academic foundation.</p>
        </div>

        <div className="about-grid grid-2">
          <div className="about-text-content">
            <h3 className="about-welcome-title">Aspiring AI & Data Science Engineer</h3>
            <p className="about-paragraph">
              I am <strong>R. Allice Anjani</strong>, a B.Tech student at REVA University pursuing Artificial Intelligence and Data Science.
            </p>
            <p className="about-paragraph">
              I am currently in my 3rd semester and building my skills through coursework, coding practice, certifications, projects, and industrial exposure.
            </p>
            <p className="about-paragraph">
              I am familiar with C and Python, with basic knowledge of SQL, MySQL, Git, and GitHub. I am currently strengthening my knowledge of Data Structures and Algorithms, Artificial Intelligence, Data Science, and Database Management Systems.
            </p>
          </div>

          <div className="about-highlights-grid">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-card">
                <div className="highlight-icon-wrapper">
                  {h.icon}
                </div>
                <div className="highlight-card-info">
                  <h4>{h.title}</h4>
                  <p>{h.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-welcome-title {
          font-size: 1.6rem;
          font-family: var(--font-serif);
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .about-paragraph {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .about-paragraph strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        .about-highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .about-highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          /* Make the last card take full width if there's an odd number of items */
          .about-highlights-grid .highlight-card:last-child {
            grid-column: span 2;
          }
        }

        .highlight-card {
          background-color: var(--bg-card);
          border: 1px solid var(--grey-border);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-normal);
        }

        .highlight-card:hover {
          border-color: var(--accent-pink-border);
          background-color: var(--accent-pink-light);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .highlight-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--accent-pink-light);
          color: var(--accent-pink-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition-normal);
        }

        .highlight-card:hover .highlight-icon-wrapper {
          background-color: var(--accent-pink);
          color: white;
        }

        .highlight-icon-svg {
          width: 22px;
          height: 22px;
        }

        .highlight-card-info h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
        }

        .highlight-card-info p {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};

export default About;
