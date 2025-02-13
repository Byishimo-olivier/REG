import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import './Calendar.css';
import logo from '../Components/images/logo.png';
import profile from '../Components/images/profile.jpg';
import TaskScheduler from './TaskScheduler';

const Layout = ({ children }) => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const isFaultDetectionPage = window.location.pathname === '/fault-detection';

  return (
    <div className={`app-container ${isFaultDetectionPage ? 'dark-theme' : ''}`}>
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="REG Logo" />
        </div>
        <nav className="menu">
          <div className="menu-section">
            <Link to="/dashboard"><span>🏠</span> Home</Link>
            <Link to="/grid-planning"><span>🔧</span> Network Planning</Link>
            <Link to="/maintenance"><span>📅</span> Operations & Maintenance</Link>
            <Link to="/fault-detection"><span>⚠️</span> Fault Detection</Link>
            <Link to="/predictive-analytics"><span>📊</span> Predictive Analytics</Link>
            <Link to="/customer-engagement"><span>👥</span> Customer Engagement</Link>
            <Link to="/reporting"><span>📝</span> Reporting</Link>
          </div>
          
          <div className="task-references">
            <div className="task-header">
              <h4>About Tasks</h4>
            </div>
            <div className="task-types">
              <div className="task-type">
                <div className="color-box complete"></div>
                <span>Complete</span>
              </div>
              <div className="task-type">
                <div className="color-box appending"></div>
                <span>Appending</span>
              </div>
              <div className="task-type">
                <div className="color-box missed"></div>
                <span>Missed</span>
              </div>
              <button 
                className="sidebar-add-task"
                onClick={() => setShowTaskModal(true)}
              >
                <span className="plus-icon">+</span>
                Add Task
              </button>
            </div>
          </div>
          
          <div className="menu-section others">
            <h3>OTHERS</h3>
            <Link to="/help"><span>❓</span> Help Centre</Link>
            <Link to="/settings"><span>⚙️</span> Settings</Link>
            <Link to="/login" className="logout"><span>🚪</span> Log out</Link>
          </div>
        </nav>
      </aside>
      <main className={`main-content ${isFaultDetectionPage ? 'dark-theme' : ''}`}>
        <header>
          <h2>{isFaultDetectionPage ? 'Fault detection' : 'Network Planning'}</h2>
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="Search network components..." />
              <button>🔍</button>
            </div>
            <div className="user-profile">
              <img src={profile} alt="Profile" />
              <span>B.Over</span>
            </div>
            <div className="notifications">
              <button>🔔</button>
            </div>
          </div>
        </header>
        {children}
      </main>

      {/* Task Modal */}
      {showTaskModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setShowTaskModal(false)}
            >
              ×
            </button>
            <TaskScheduler />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout; 