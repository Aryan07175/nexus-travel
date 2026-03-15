import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Award, Heart } from 'lucide-react';

const STATS = [
  { number: '150+', label: 'Destinations Curated' },
  { number: '50K+', label: 'Happy Travellers' },
  { number: '6', label: 'Global Regions' },
  { number: '4.9★', label: 'Average Rating' },
];

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <span className="section-badge" style={{ marginBottom: '1.2rem' }}>Our Story</span>
        <h1>About NexusTravel</h1>
        <p>Redefining how we experience, discover, and book travel through premium 3D technology.</p>
      </div>

      <div className="about-content">
        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '2rem' }}>
          NexusTravel was born from a simple idea: what if you could truly see the world before you visit it? We built an interactive 3D globe platform that lets you explore every destination in vivid detail, backed by expert curation and seamless booking.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, fontSize: '0.98rem', marginBottom: '3rem' }}>
          From the majestic Himalayas of Ladakh to the romantic sunsets of Santorini, every destination in our catalog has been hand-picked by extensive travel experts to ensure you get nothing but the best. We believe the journey begins the moment you start dreaming — and we're here to make that dream extraordinary.
        </p>

        <div className="about-grid">
          {STATS.map((s, i) => (
            <div key={i} className="about-stat-card">
              <div className="about-stat-number">{s.number}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/destinations" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Start Exploring
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
