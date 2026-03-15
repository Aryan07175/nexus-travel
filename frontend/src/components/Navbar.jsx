import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo">
        <div className="logo-icon">
          <Compass size={20} color="#000" strokeWidth={2.5} />
        </div>
        Nexus<span>Travel</span>
      </Link>

      <ul className="nav-links">
        <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
        <li><Link to="/destinations" className={`nav-link ${isActive('/destinations') ? 'active' : ''}`}>Destinations</Link></li>
        <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
      </ul>

      <div className="nav-actions">
        <Link to="/signup" className="btn btn-ghost" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
          Sign Up
        </Link>
        <Link to="/signin" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
          <User size={16} /> Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
