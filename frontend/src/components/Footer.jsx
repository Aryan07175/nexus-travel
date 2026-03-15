import React from 'react';
import { Compass, Twitter, Instagram, Facebook, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Compass size={22} color="var(--accent-color)" />
            Nexus<span>Travel</span>
          </Link>
          <p>Discover the world in a new dimension. Premium 3D travel planning for the modern explorer.</p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={16} /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#">Travel Guides</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Get the latest curated destinations and exclusive travel deals in your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('✅ Subscribed!'); }}>
            <div className="input-group">
              <Mail size={16} color="var(--text-secondary)" />
              <input type="email" placeholder="your@email.com" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', gap: '0.5rem' }}>
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NexusTravel. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Built with ❤️ using MERN + Three.js</p>
      </div>
    </footer>
  );
};

export default Footer;
