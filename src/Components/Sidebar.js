// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Components/images/logo.png';
import profile from '../Components/images/profile.jpg';
import './sidebar.css'; // You can keep the sidebar specific styles here

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="REG Logo" />
      </div>
      <nav className="menu-section">
        <span className="menu-label">MENU</span>
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
      </nav>
      <div className="menu">
        <h3>OTHERS</h3>
        <ul>
          <li><span>❓</span> Help Centre</li>
          <Link to="/settings" className="menu-item">
            <li><span>⚙️</span> Setting</li>
          </Link>
          <li className="logout"><span>🚪</span> Log out</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
