import React from "react";
import "./Dashboard.css";
import logo from './images/logo.png';
import profile from './images/profile.jpg';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Rwanda Energy Group" />
        </div>
        
        <div className="menu-section">
          <div className="menu-label">MENU</div>
          <div className="menu-items">
            <div className="menu-item active">
              <span className="menu-icon">🏠</span>
              <span>Home</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">📐</span>
              <span>Network Planning</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">⚙️</span>
              <span>Operations & Maintenance</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">📝</span>
              <span>Fault Detection</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">📊</span>
              <span>Predictive Analytics</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">👥</span>
              <span>Customer Engagement</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">📄</span>
              <span>Reporting</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">📈</span>
              <span>KPIs</span>
            </div>
          </div>

          <div className="menu-label">OTHERS</div>
          <div className="menu-items">
            <div className="menu-item">
              <span className="menu-icon">❓</span>
              <span>Help Centre</span>
            </div>
            <Link to="/settings" className="menu-item">
              <span className="menu-icon">⚙️</span>
              <span>Setting</span>
            </Link>
            <div className="menu-item logout">
              <span className="menu-icon">🚪</span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Customer Engagement</h1>
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="Search for Everything" />
              <button className="search-btn">🔍</button>
            </div>
            <div className="user-profile">
              <img src={profile} alt="Profile" />
              <span>C.Prince</span>
            </div>
            <button className="notification-btn">🔔</button>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <MapContainer center={[40.7829, -73.9654]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <div className="map-filters">
              <button className="filter-btn customer-zones">Customer Zones</button>
              <button className="filter-btn substations">Substations</button>
              <button className="filter-btn transformers">Transformers</button>
              <button className="filter-btn feeder-lines">Feeder Lines</button>
            </div>
          </MapContainer>
        </div>

        {/* Dashboard Widgets */}
        <div className="widgets-container">
          {/* Grid Health Widget */}
          <div className="widget grid-health">
            <div className="widget-header">
              <h3>Grid Health</h3>
              <button className="more-options">...</button>
            </div>
            <div className="donut-chart">
              {/* You'll need to implement the actual chart here */}
              <div className="chart-legend">
                <span className="legend-item"><span className="dot offline"></span>Offline</span>
                <span className="legend-item"><span className="dot online"></span>Online</span>
                <span className="legend-item"><span className="dot standby"></span>Standby</span>
              </div>
            </div>
          </div>

          {/* Energy Stats */}
          <div className="widget energy-stats">
            <div className="stat-card">
              <h4>89,935</h4>
              <p>Total Grid Connection</p>
              <div className="trend up">
                <span>10.2</span>
                <span>+1.01% this week</span>
              </div>
            </div>
            <div className="stat-card">
              <h4>23,283.5</h4>
              <p>Energy Distributed</p>
              <div className="trend down">
                <span>3.1</span>
                <span>-0.49% this week</span>
              </div>
            </div>
          </div>

          {/* Energy Widget */}
          <div className="widget energy-widget">
            <div className="widget-header">
              <div className="energy-icon">⚡</div>
              <h3>Energy</h3>
              <select className="time-selector">
                <option>Week</option>
              </select>
            </div>
            <div className="energy-chart">
              {/* Weekly bar chart implementation */}
            </div>
          </div>

          {/* Energy Flow Analytics */}
          <div className="widget flow-analytics">
            <div className="widget-header">
              <h3>Energy Flow Analytics</h3>
              <div className="chart-controls">
                <div className="legend">
                  <span className="legend-item"><span className="dot offline"></span>Offline Assets</span>
                  <span className="legend-item"><span className="dot online"></span>Online Assets</span>
                </div>
                <select className="time-selector">
                  <option>Monthly</option>
                </select>
              </div>
            </div>
            <div className="line-chart">
              {/* Line chart implementation */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 