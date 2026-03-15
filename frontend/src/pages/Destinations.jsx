import React, { useState, useEffect } from 'react';
import { MapPin, Star, X, Search, Filter, ChevronDown } from 'lucide-react';

const CATEGORIES = ['All', 'Adventure', 'Culture', 'Beach', 'Nature', 'City', 'Relaxation', 'Romance'];
const REGIONS    = ['All', 'India', 'Europe', 'Asia', 'Americas', 'Oceania', 'Africa'];

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDest, setSelectedDest] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [region, setRegion] = useState('All');

  const fetchDestinations = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (category !== 'All') params.append('category', category);
      if (region !== 'All') params.append('region', region);
      const res = await fetch(`http://localhost:5000/api/destinations?${params}`);
      if (!res.ok) throw new Error('Failed to fetch');
      setDestinations(await res.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDestinations(); }, [category, region]);

  const handleSearchSubmit = (e) => { e.preventDefault(); fetchDestinations(); };
  const reset = () => { setSearch(''); setCategory('All'); setRegion('All'); };

  if (error) return (
    <div style={{ paddingTop: '8rem' }}>
      <div className="error-text">
        <p>Failed to load: {error}</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>Ensure the backend is running on port 5000.</p>
      </div>
    </div>
  );

  return (
    <div className="destinations-page">
      <div className="page-header">
        <h1>Curated Destinations</h1>
        <p>Premium travel locations hand-picked for extraordinary experiences.</p>
      </div>

      {/* Filter Bar */}
      <div className="filter-section">
        <div className="filter-container glass">
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <Search size={18} color="var(--text-secondary)" />
            <input
              type="text"
              placeholder="Search destinations, cities, countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>Search</button>
          </form>

          <div className="filter-controls">
            <span className="filter-label"><Filter size={14} /> Filter by Region:</span>
            <div className="filter-chips">
              {REGIONS.map(r => (
                <button key={r} className={`chip ${region === r ? 'active' : ''}`} onClick={() => setRegion(r)}>{r}</button>
              ))}
            </div>
          </div>

          <div className="filter-controls">
            <span className="filter-label"><Filter size={14} /> Category:</span>
            <div className="filter-chips">
              {CATEGORIES.map(c => (
                <button key={c} className={`chip ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loader-container">
          <div className="spinner-ring" />
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Loading destinations...</p>
        </div>
      ) : destinations.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>No destinations match your search.</p>
          <button className="btn btn-outline" onClick={reset}>Reset Filters</button>
        </div>
      ) : (
        <>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Showing <strong style={{ color: 'var(--accent-color)' }}>{destinations.length}</strong> destination{destinations.length !== 1 ? 's' : ''}
          </p>
          <div className="destinations-grid">
            {destinations.map((dest) => (
              <div key={dest._id} className="destination-card" onClick={() => setSelectedDest(dest)}>
                <div className="card-tags">
                  <span className="tag tag-region">{dest.region}</span>
                  <span className="tag tag-category">{dest.category}</span>
                </div>
                <div className="card-price-badge">{dest.currencySymbol}{dest.price.toLocaleString()}</div>
                <div className="card-img-wrapper">
                  <img src={dest.imageUrl} alt={dest.title} className="card-img" loading="lazy" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{dest.title}</h3>
                    <div className="card-rating">
                      <Star size={14} fill="var(--gold)" color="var(--gold)" />
                      <span>{dest.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="card-desc">{dest.description}</p>
                  <div className="card-footer">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${dest.coordinates.lat},${dest.coordinates.lng}`}
                      target="_blank" rel="noopener noreferrer"
                      className="card-map-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MapPin size={13} /> View on Map
                    </a>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                      onClick={(e) => { e.stopPropagation(); setSelectedDest(dest); }}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Booking Modal */}
      {selectedDest && (
        <div className="modal-overlay" onClick={() => setSelectedDest(null)}>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDest(null)}>
              <X size={18} />
            </button>
            <div className="modal-img-area">
              <img src={selectedDest.imageUrl} alt={selectedDest.title} />
            </div>
            <div className="modal-body">
              <h2>Booking Confirmation</h2>
              <h3>{selectedDest.title}</h3>
              <p>{selectedDest.description}</p>
              <div className="modal-price-row">
                <span className="modal-price-label">Total Package Price</span>
                <span className="modal-price-value">{selectedDest.currencySymbol}{selectedDest.price.toLocaleString()}</span>
              </div>
              <button
                className="btn btn-primary btn-block"
                onClick={() => { alert(`🎉 Booking confirmed for ${selectedDest.title}!`); setSelectedDest(null); }}
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;
