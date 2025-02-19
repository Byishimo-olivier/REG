import React, { useState } from "react";
import "./CustomerEngagment.css";
import logo from './images/logo.png';
import profile from './images/profile.jpg';
import { Link } from 'react-router-dom';

const CustomerEngagement = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
  
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
  
      // Hide sidebar fully when closed
      if (!sidebar.classList.contains("open")) {
        setTimeout(() => sidebar.classList.add("closed"), 300);
      } else {
        sidebar.classList.remove("closed");
      }
    });
  });
  
  return (
    <div className="app-container">
      {/* Sidebar Toggle Button */}
      <button className="menu-toggle" onClick={toggleSidebar}>☰</button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={logo} alt="REG Logo" />
        </div>
        
        <div className="menu">
          <span className="menu-label">MENU</span>
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
        </div>

        <div className="others">
          <span className="menu-label">OTHERS</span>
          <ul>
            <li><span className="icon">ℹ️</span> Help Centre</li>
            <li><span className="icon">⚙️</span> Setting</li>
            <li className="logout"><span className="icon">🔸</span> Log out</li>
          </ul>
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

        <div className="stats-container">
          <div className="stat-box">Message(s): 3</div>
          <div className="stat-box">User(s): 3</div>
        </div>

        <div className="messages-container">
          {[1, 2, 3].map((index) => (
            <div className="message-card" key={index}>
              <div className="message-content">
                <h3>Prince C</h3>
                <p>Hello, I have a query regarding your services.</p>
              </div>
              <div className="message-actions">
                <button className="reply-btn">Reply</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerEngagement;
