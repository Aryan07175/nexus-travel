import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ArrowRight, Globe, Star, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Earth3D from './Earth3D';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          Next Generation Travel
        </span>
        
        <h1>
          Explore The World
          <span className="gradient-text">In 3D.</span>
        </h1>

        <p>
          Immerse yourself in breathtaking destinations. Experience premium travel planning with our interactive 3D platform that brings every journey to life before you even pack your bags.
        </p>

        <div className="hero-actions">
          <Link to="/destinations" className="btn btn-primary">
            Explore Destinations <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={18} /> Our Story
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat-item">
            <div className="hero-stat-value">150<span>+</span></div>
            <div className="hero-stat-label">Destinations</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-value">50<span>K+</span></div>
            <div className="hero-stat-label">Travellers</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-value">4.9<span>★</span></div>
            <div className="hero-stat-label">Avg Rating</div>
          </div>
        </div>
      </div>

      <div className="hero-3d-container">
        <Canvas 
          camera={{ position: [0, 0, 9], fov: 42 }} 
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <Earth3D />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={true}
              autoRotateSpeed={0.6}
              minPolarAngle={Math.PI * 0.3}
              maxPolarAngle={Math.PI * 0.7}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
