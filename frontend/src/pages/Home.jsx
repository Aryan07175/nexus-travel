import React from 'react';
import Hero from '../components/Hero';
import { Globe, Shield, Zap, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TRENDING = [
  {
    title: 'Leh-Ladakh',
    country: 'India',
    category: 'Adventure',
    img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=700',
    rating: 4.9
  },
  {
    title: 'Santorini',
    country: 'Greece',
    category: 'Romance',
    img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=700',
    rating: 4.9
  },
  {
    title: 'Bali',
    country: 'Indonesia',
    category: 'Relaxation',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=700',
    rating: 4.9
  },
  {
    title: 'Goa Beaches',
    country: 'India',
    category: 'Beach',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=700',
    rating: 4.7
  },
  {
    title: 'Swiss Alps',
    country: 'Switzerland',
    category: 'Adventure',
    img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=700',
    rating: 5.0
  },
  {
    title: 'Kyoto',
    country: 'Japan',
    category: 'Culture',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=700',
    rating: 4.8
  },
];

const FEATURES = [
  {
    icon: <Globe size={26} color="#000" />,
    iconClass: 'icon-cyan',
    title: 'Interactive 3D Globe',
    desc: 'Visually explore any destination on a real-time rendered 3D globe before you book your trip.'
  },
  {
    icon: <Shield size={26} color="#000" />,
    iconClass: 'icon-purple',
    title: 'Safe & Secure',
    desc: 'All your bookings and personal details are fully encrypted and secured with industry standards.'
  },
  {
    icon: <Zap size={26} color="#000" />,
    iconClass: 'icon-gold',
    title: 'Instant Booking',
    desc: 'Confirm reservations in seconds. No back-and-forth, no waiting — just seamless travel planning.'
  },
  {
    icon: <Award size={26} color="#000" />,
    iconClass: 'icon-pink',
    title: 'Curated Experiences',
    desc: 'Every destination is hand-picked by travel experts to guarantee an unforgettable experience.'
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      {/* Features Section */}
      <section className="section section-center">
        <div className="section-badge">Why NexusTravel</div>
        <h2 className="section-title">Travel Reimagined for the <span className="gradient-text">Digital Age</span></h2>
        <p className="section-subtitle">We blend cutting-edge 3D technology with expert curation to deliver the most immersive travel planning experience in the world.</p>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className={`feature-icon-wrapper ${f.iconClass}`}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Destinations Section */}
      <section className="trending-section">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', paddingRight: '0.5rem' }}>
            <div>
              <div className="section-badge" style={{ marginBottom: '0.75rem' }}>Trending Now</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Popular <span className="gradient-text">This Season</span></h2>
            </div>
            <Link to="/destinations" className="btn btn-outline" style={{ whiteSpace: 'nowrap' }}>View All</Link>
          </div>
          <div className="trending-scroll">
            {TRENDING.map((dest, i) => (
              <Link to="/destinations" key={i} className="trending-card">
                <img src={dest.img} alt={dest.title} loading="lazy" />
                <div className="trending-card-overlay" />
                <div className="trending-card-info">
                  <div className="trending-card-category">{dest.category}</div>
                  <div className="trending-card-title">{dest.title}</div>
                  <div className="trending-card-meta">
                    <span>{dest.country}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Star size={12} fill="#f5c842" color="#f5c842" /> {dest.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          padding: '4.5rem 4rem',
          borderRadius: '28px',
          background: 'linear-gradient(135deg, rgba(0,255,255,0.08) 0%, rgba(0,50,150,0.15) 50%, rgba(124,58,237,0.08) 100%)',
          border: '1px solid rgba(0,255,255,0.2)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* decorative circles */}
          <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,255,0.06), transparent)', top: '-100px', right: '-100px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07), transparent)', bottom: '-80px', left: '-80px', pointerEvents: 'none' }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-badge" style={{ marginBottom: '1.5rem' }}>Start Your Journey</div>
            <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 1.5rem' }}>The World Is <span className="gradient-text">Waiting For You</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Discover over 150 curated destinations across 6 regions. Start exploring today.
            </p>
            <Link to="/destinations" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
              Explore All Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
