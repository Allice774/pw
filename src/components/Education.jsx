import React from 'react';
import { Calendar, School, Award, ChevronRight } from 'lucide-react';

const Education = () => {
  const semesters = [
    { sem: "Semester 1", sgpa: "8.75" },
    { sem: "Semester 2", sgpa: "9.10" }
  ];

  return (
    <section id="education" className="education-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2>Academic Foundation</h2>
          <p className="section-subtitle">My educational timeline and academic achievements.</p>
        </div>

        <div className="education-grid">
          {/* Timeline side */}
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-marker">
                <School className="timeline-icon" />
              </div>
              <div className="timeline-content card">
                <span className="education-badge">Undergraduate</span>
                <h3 className="education-inst">REVA University</h3>
                <h4 className="education-degree">Bachelor of Technology (B.Tech) – Artificial Intelligence & Data Science</h4>
                <p className="education-dept">School of CSE</p>
                <div className="education-meta">
                  <span className="meta-item"><Calendar size={14} /> 2025 - Present</span>
                  <span className="meta-item-tag">Current Semester: 3rd Semester</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <School className="timeline-icon" />
              </div>
              <div className="timeline-content card secondary-edu-card">
                <h3 className="education-inst">Kendriya Vidyalaya</h3>
                <h4 className="education-degree">School Education</h4>
                <p className="education-dept">Secondary & Higher Secondary Education</p>
              </div>
            </div>
          </div>

          {/* Performance scorecard side */}
          <div className="performance-container">
            <div className="performance-card card">
              <div className="performance-header">
                <Award className="perf-icon" />
                <h3>Academic Performance</h3>
              </div>
              <p className="perf-intro">Consistent performance across university grading semesters:</p>
              
              <div className="sgpa-display-grid">
                {semesters.map((s, index) => (
                  <div key={index} className="sgpa-score-card">
                    <span className="sgpa-label">{s.sem}</span>
                    <span className="sgpa-val">{s.sgpa}</span>
                    <span className="sgpa-scale">SGPA</span>
                  </div>
                ))}
              </div>

              <div className="perf-table-wrapper">
                <table className="perf-table">
                  <thead>
                    <tr>
                      <th>Semester</th>
                      <th>SGPA Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semesters.map((s, index) => (
                      <tr key={index}>
                        <td>{s.sem}</td>
                        <td className="perf-cell-bold">{s.sgpa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .education-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        /* Timeline Styles */
        .timeline-container {
          position: relative;
          padding-left: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .timeline-container::before {
          content: '';
          position: absolute;
          left: 9px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background-color: var(--accent-pink-border);
        }

        .timeline-item {
          position: relative;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          margin-left: -10px; /* Offset for line alignment */
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--bg-card);
          border: 2px solid var(--accent-pink-border);
          color: var(--accent-pink-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-normal);
        }

        .timeline-item:hover .timeline-marker {
          background-color: var(--accent-pink);
          border-color: var(--accent-pink);
          color: white;
        }

        .timeline-icon {
          width: 18px;
          height: 18px;
        }

        .timeline-content {
          padding: 2rem;
        }

        .secondary-edu-card {
          opacity: 0.85;
        }

        .education-badge {
          display: inline-block;
          background-color: var(--accent-pink-light);
          border: 1px solid var(--accent-pink-border);
          color: var(--accent-pink-hover);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .education-inst {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .education-degree {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .education-dept {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .education-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .meta-item-tag {
          background-color: var(--grey-light);
          color: var(--text-primary);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          font-weight: 500;
        }

        /* Performance score layout */
        .performance-card {
          height: 100%;
        }

        .performance-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .perf-icon {
          color: var(--accent-pink-hover);
          width: 24px;
          height: 24px;
        }

        .perf-intro {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .sgpa-display-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .sgpa-score-card {
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--accent-pink-light) 100%);
          border: 1px solid var(--accent-pink-border);
          border-radius: var(--radius-md);
          padding: 1.25rem 0.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: var(--transition-normal);
        }

        .sgpa-score-card:hover {
          transform: scale(1.03);
          box-shadow: var(--shadow-md);
        }

        .sgpa-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .sgpa-val {
          font-family: var(--font-serif);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }

        .sgpa-scale {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-pink-hover);
          margin-top: 0.25rem;
          letter-spacing: 0.5px;
        }

        /* Performance Table */
        .perf-table-wrapper {
          border: 1px solid var(--grey-border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          background-color: var(--bg-primary);
        }

        .perf-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
        }

        .perf-table th {
          background-color: var(--grey-light);
          color: var(--text-primary);
          font-weight: 600;
          padding: 0.75rem 1rem;
        }

        .perf-table td {
          padding: 0.75rem 1rem;
          border-top: 1px solid var(--grey-border);
          color: var(--text-secondary);
        }

        .perf-cell-bold {
          font-weight: 700;
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
};

export default Education;
