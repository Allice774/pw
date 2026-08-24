import React from 'react';
import { Trophy, Award, ShieldCheck } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Recognition</span>
          <h2>Key Achievements</h2>
          <p className="section-subtitle">Academic milestones and awards received during my coursework.</p>
        </div>

        <div className="achievement-wrapper">
          <div className="achievement-main-card card">
            <div className="achievement-icon-outer">
              <Trophy className="achievement-trophy-icon" size={36} />
            </div>
            
            <div className="achievement-info-content">
              <span className="achievement-category">Academic Project Award</span>
              <h3 className="achievement-title">4th Prize — Smart Dustbin Project</h3>
              <p className="achievement-description">
                Secured 4th Prize for the Smart Dustbin project and received an official certificate of recognition. The project automated wet and dry waste segregation using sensor arrays.
              </p>
              <div className="achievement-meta-badges">
                <span className="meta-badge">
                  <Award size={14} /> Certificate Received
                </span>
                <span className="meta-badge">
                  <ShieldCheck size={14} /> Academic Verification
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .achievements-section {
          background-color: var(--bg-secondary);
        }

        .achievement-wrapper {
          max-width: 760px;
          margin: 0 auto;
        }

        .achievement-main-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2.5rem;
          text-align: center;
          background: linear-gradient(135deg, var(--bg-card) 0%, var(--accent-pink-light) 100%);
          border-color: var(--accent-pink-border);
        }

        @media (min-width: 640px) {
          .achievement-main-card {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
          }
        }

        .achievement-icon-outer {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #fffbeb; /* Golden background tint */
          border: 2px solid #fde68a;
          color: #d97706; /* Trophy gold */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 10px 15px -3px rgba(217, 119, 6, 0.1);
          animation: float-trophy 4s ease-in-out infinite;
        }

        @keyframes float-trophy {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .achievement-info-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .achievement-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent-pink-hover);
        }

        .achievement-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .achievement-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .achievement-meta-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .achievement-meta-badges {
            justify-content: flex-start;
          }
        }

        .meta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          background-color: white;
          border: 1px solid var(--grey-border);
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
