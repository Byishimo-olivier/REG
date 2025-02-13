import React from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import "./Reporting.css";
import logo from './images/logo.png';
import profile from './images/profile.jpg';
import { Link } from 'react-router-dom';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Reporting = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Non-Compliant Assets',
        data: [20, 30, 45, 35, 40, 45],
        borderColor: '#0066cc',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Compliant Assets',
        data: [30, 20, 35, 45, 35, 30],
        borderColor: '#ff9933',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#666',
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#666',
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  };

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
            <li><span>⚙️</span> Setting</li>
            <li className="logout"><span>🚪</span> Log out</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h1>Reporting</h1>
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

        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Chart Card */}
            <div className="chart-card">
              <div className="chart-header">
                <div className="chart-title">
                  <h3>System Compliance Trends</h3>
                  <div className="legend">
                    <div className="legend-item">
                      <span className="dot blue"></span>
                      <span>Non-Compliant Assets</span>
                    </div>
                    <div className="legend-item">
                      <span className="dot orange"></span>
                      <span>Compliant Assets</span>
                    </div>
                  </div>
                </div>
                <select>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="chart-wrapper">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-row">
              <div className="stat-card">
                <h2>89,935</h2>
                <p>Non-Compliant Assets</p>
                <div className="stat-change positive">
                  <span className="arrow">↑</span>
                  <span className="value">10.2</span>
                  <span className="percentage">+1.01% this week</span>
                </div>
              </div>
              <div className="stat-card">
                <h2>23,283.5</h2>
                <p>Compliant Assets</p>
                <div className="stat-change negative">
                  <span className="arrow">↑</span>
                  <span className="value">3.1</span>
                  <span className="percentage">-0.49% this week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="download-section">
              <h3>Download Reports Here</h3>
              <div className="download-buttons">
                <button className="download-btn">
                  <div className="btn-content">
                    <div className="btn-inner">
                      <span className="btn-icon">📊</span>
                      <span className="btn-text">Compliance Tracking</span>
                    </div>
                  </div>
                </button>
                <button className="download-btn">
                  <div className="btn-content">
                    <div className="btn-inner">
                      <span className="btn-icon">📈</span>
                      <span className="btn-text">Automated Reporting</span>
                    </div>
                  </div>
                </button>
                <button className="download-btn">
                  <div className="btn-content">
                    <div className="btn-inner">
                      <span className="btn-icon">📝</span>
                      <span className="btn-text">Audit Logs</span>
                    </div>
                  </div>
                </button>
                <button className="download-btn">
                  <div className="btn-content">
                    <div className="btn-inner">
                      <span className="btn-icon">📁</span>
                      <span className="btn-text">Reports Archive</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting; 