import React from 'react';
import { Terminal, Database, Code, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Terminal size={20} />,
      skills: ["C", "Python"]
    },
    {
      title: "Database",
      icon: <Database size={20} />,
      skills: ["SQL", "MySQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <Code size={20} />,
      skills: ["Git", "GitHub"]
    },
    {
      title: "Other Core",
      icon: <BookOpen size={20} />,
      skills: ["Data Structures and Algorithms"]
    }
  ];

  const learningSkills = [
    "Data Structures and Algorithms",
    "Python",
    "Artificial Intelligence",
    "Data Science",
    "Database Management Systems"
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2>Technical Expertise</h2>
          <p className="section-subtitle">Categorized skills and core concepts I work with.</p>
        </div>

        <div className="skills-layout-grid">
          {/* Main categories */}
          <div className="categories-grid grid-2">
            {skillCategories.map((cat, index) => (
              <div key={index} className="skill-cat-card card">
                <div className="cat-header">
                  <div className="cat-icon">{cat.icon}</div>
                  <h3>{cat.title}</h3>
                </div>
                <div className="skills-tag-list">
                  {cat.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning Section */}
          <div className="learning-card card">
            <div className="learning-header">
              <Sparkles className="learning-icon" />
              <h3>Currently Learning & Strengthening</h3>
            </div>
            <p className="learning-desc">
              I am actively expanding my knowledge base and technical skills in these areas:
            </p>
            <div className="learning-list">
              {learningSkills.map((skill, lIndex) => (
                <div key={lIndex} className="learning-item">
                  <span className="pulse-dot"></span>
                  <span className="learning-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 1024px) {
          .skills-layout-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        .categories-grid {
          gap: 1.5rem;
        }

        .skill-cat-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cat-icon {
          color: var(--accent-pink-hover);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skills-tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .skill-tag {
          background-color: var(--bg-primary);
          border: 1px solid var(--grey-border);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .skill-cat-card:hover .skill-tag {
          border-color: var(--accent-pink-border);
        }

        .skill-tag:hover {
          background-color: var(--accent-pink-light);
          color: var(--accent-pink-hover);
          border-color: var(--accent-pink-border);
          transform: translateY(-1px);
        }

        /* Currently Learning */
        .learning-card {
          background: linear-gradient(135deg, var(--bg-card) 0%, var(--accent-pink-light) 100%);
          border-color: var(--accent-pink-border);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .learning-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .learning-icon {
          color: var(--accent-pink-hover);
        }

        .learning-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .learning-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .learning-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: rgba(255, 255, 255, 0.7);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(244, 114, 182, 0.15);
          transition: var(--transition-normal);
        }

        .learning-item:hover {
          transform: translateX(4px);
          background-color: white;
          border-color: var(--accent-pink-border);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent-pink);
          box-shadow: 0 0 0 0 rgba(244, 114, 182, 0.7);
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(244, 114, 182, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(244, 114, 182, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(244, 114, 182, 0);
          }
        }

        .learning-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
};

export default Skills;
