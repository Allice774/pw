import React from 'react';
import { Award, Briefcase, ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Data Visualization with Python",
      issuer: "IBM Certificate Course",
      icon: <Award className="cert-card-icon" />
    },
    {
      id: 2,
      title: "Data Analysis with Python",
      issuer: "IBM Certificate Course",
      icon: <Award className="cert-card-icon" />
    },
    {
      id: 3,
      title: "Python 101 for Data Science",
      issuer: "IBM Certificate Course",
      icon: <Award className="cert-card-icon" />
    },
    {
      id: 4,
      title: "Wadhwani Foundation Certificate Course",
      issuer: "Wadhwani Foundation",
      icon: <ShieldCheck className="cert-card-icon" />
    },
    {
      id: 5,
      title: "Rakuten Bangalore Industrial Visit Certificate",
      issuer: "Rakuten",
      icon: <Briefcase className="cert-card-icon" />
    }
  ];

  return (
    <section id="certifications" className="certifications-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2>Certifications & Visits</h2>
          <p className="section-subtitle">Verified programs and learning courses I have completed.</p>
        </div>

        <div className="certs-grid grid-3">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card card">
              <div className="cert-icon-wrapper">
                {cert.icon}
              </div>
              <div className="cert-details">
                <span className="cert-issuer">{cert.issuer}</span>
                <h3 className="cert-title">{cert.title}</h3>
              </div>
              <div className="cert-badge">Verified</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 2rem;
          height: 100%;
        }

        .cert-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--accent-pink-light);
          color: var(--accent-pink-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
        }

        .cert-card:hover .cert-icon-wrapper {
          background-color: var(--accent-pink);
          color: white;
        }

        .cert-card-icon {
          width: 22px;
          height: 22px;
        }

        .cert-details {
          flex-grow: 1;
        }

        .cert-issuer {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent-pink-hover);
          margin-bottom: 0.35rem;
          display: block;
        }

        .cert-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .cert-badge {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #10b981; /* Green verification badge */
          background-color: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 0.2rem 0.5rem;
          border-radius: 50px;
          align-self: flex-start;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
