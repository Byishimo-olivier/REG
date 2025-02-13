import React from 'react';
import './FaultDetection.css';
import logo from '../Components/images/logo.png';
import profile from '../Components/images/profile.jpg';
import { Link } from 'react-router-dom';

const FaultDetection = () => {
  // Map center coordinates for NYC Columbus Circle area
  const GOOGLE_MAPS_API_KEY = "AIzaSyDngxykTkL7IMVnlNT7rTSr6NDTusYmqHU";

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="REG Logo" />
        </div>
        <div className="menu">
          <h3>MENU</h3>
          <ul>
          <Link to="/" className="menu-item active">
            <div className="menu-icon">🏠</div>
            <span>Home</span>
          </Link>
          <Link to="/NetworkPlanning" className="menu-item">
            <div className="menu-icon">🔌</div>
            <span>Network Planning</span>
          </Link>
          <Link to="/maintenance" className="menu-item">
            <span>⚙️</span> Operations & Maintenance
          </Link>
          <Link to="/fault-detection" className="menu-item">
            <span>🔍</span> Fault Detection
          </Link>
          <Link to="/predictive-analytics" className="menu-item">
            <span>📊</span> Predictive Analytics
          </Link>
          <Link to="/customer-engagement" className="menu-item">
            <span>👥</span> Customer Engagement
          </Link>
          <Link to="/reporting" className="menu-item">
            <span>📝</span> Reporting
          </Link>
          <Link to="/kpi" className="menu-item">
            <span>📊</span> KPIs
          </Link>
          </ul>
          <h3>OTHERS</h3>
          <ul>
            <li><span>❓</span> Help Centre</li>
            <li><span>⚙️</span> Settings</li>
            <li className="logout"><span>🚪</span> Log out</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h2>Fault Detection</h2>
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="Search faults..." />
              <button>🔍</button>
            </div>
            <div className="user-profile">
              <img src={profile} alt="Profile" />
              <span>C.Prince</span>
            </div>
            <div className="notifications">
              <button>🔔</button>
            </div>
          </div>
        </header>

        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-box minor"></span>
            <span className="legend-text">Minor Issues</span>
          </div>
          <div className="legend-item">
            <span className="legend-box short-circuits"></span>
            <span className="legend-text">Short Circuits</span>
          </div>
        </div>

        <div className="map-section">
          <div className="map-filters">
            <button className="filter-btn minor">Minor Issues</button>
            <button className="filter-btn critical">Critical Faults</button>
            <button className="filter-btn resolved">Resolved</button>
            <button className="filter-btn maintenance">Under Maintenance</button>
          </div>
          
          <div className="map-container">
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              className="map-frame"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=40.7678,-73.9824&zoom=15&maptype=roadmap`}
            ></iframe>
            
            <div className="map-controls">
              <button className="control-btn">+</button>
              <button className="control-btn">−</button>
              <button className="control-btn">◎</button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FaultDetection;