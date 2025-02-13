import React, { useState } from "react";
import "./Settings.css";
import logo from './images/logo.png';
import profile from './images/profile.jpg';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="REG Logo" />
        </div>
        
        <div className="menu-section">
          <p className="section-title">MENU</p>
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

        <div className="menu-section">
          <p className="section-title">OTHERS</p>
          <ul>
            <li><span>❓</span> Help Centre</li>
            <li className="active"><span>⚙️</span> Setting</li>
            <li className="logout"><span>🚪</span> Log out</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h1>Settings</h1>
          <div className="header-right">
            <div className="search-container">
              <input type="text" placeholder="Search for Everything" />
              <button>🔍</button>
            </div>
            <div className="profile">
              <img src={profile} alt="Profile" />
              <span>C.Prince</span>
            </div>
            <button className="notification">🔔</button>
          </div>
        </div>

        {/* Settings Navigation */}
        <div className="settings-nav">
          <button 
            className={`nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`nav-btn ${activeTab === 'password' ? 'active' : ''}`}
            onClick={() => setActiveTab('password')}
          >
            Password
          </button>
          <button 
            className={`nav-btn ${activeTab === 'notification' ? 'active' : ''}`}
            onClick={() => setActiveTab('notification')}
          >
            Notification
          </button>
        </div>

        {/* Settings Content */}
        <div className="settings-content">
          {activeTab === 'profile' && (
            <div className="profile-section">
              <div className="profile-form">
                <div className="form-group">
                  <label>Profile Photo :</label>
                  <div className="profile-photo">
                    <img src={profile} alt="Profile" />
                    <button className="edit-photo">✏️</button>
                  </div>
                </div>

                <div className="form-group">
                  <label>First @ LastName :</label>
                  <div className="name-inputs">
                    <input type="text" value="K" className="first-name" />
                    <input type="text" value="Christian" className="last-name" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address :</label>
                  <input type="email" value="Christian@gmail.com" />
                </div>

                <div className="form-group">
                  <label>Mobile Number :</label>
                  <input type="tel" value="0788888888" />
                </div>

                <div className="form-group">
                  <label>Location :</label>
                  <input type="text" value="Kigali City" />
                </div>

                <div className="form-actions">
                  <button className="save-btn">Save Change</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'password' && (
            <div className="password-section">
              <div className="password-form">
                <div className="form-group">
                  <label>Current Password :</label>
                  <div className="password-input-container">
                    <input type="password" placeholder="Enter current password" />
                    <button className="toggle-password">👁️</button>
                  </div>
                </div>

                <div className="form-group">
                  <label>New Password :</label>
                  <div className="password-input-container">
                    <input type="password" placeholder="Enter new password" />
                    <button className="toggle-password">👁️</button>
                  </div>
                  <div className="password-requirements">
                    <p>Password must contain:</p>
                    <ul>
                      <li>✓ At least 8 characters</li>
                      <li>✓ One uppercase letter</li>
                      <li>✓ One number</li>
                      <li>✓ One special character</li>
                    </ul>
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm New Password :</label>
                  <div className="password-input-container">
                    <input type="password" placeholder="Confirm new password" />
                    <button className="toggle-password">👁️</button>
                  </div>
                </div>

                <div className="form-actions">
                  <button className="save-btn">Change Password</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notification' && (
            <div className="notification-section">
              <div className="notification-form">
                <div className="notification-group">
                  <h3>Email Notifications</h3>
                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>System Alerts</h4>
                      <p>Get notified about system status and updates</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Maintenance Updates</h4>
                      <p>Receive notifications about scheduled maintenance</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>

                <div className="notification-group">
                  <h3>Push Notifications</h3>
                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Critical Alerts</h4>
                      <p>Immediate notifications for critical system events</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Task Updates</h4>
                      <p>Get notified about task assignments and updates</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button className="save-btn">Save Preferences</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings; 