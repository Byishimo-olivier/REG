import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './KPIs.css';
import logo from '../Components/images/logo.png';
import profile from '../Components/images/profile.jpg';
import { Link } from 'react-router-dom';

const chartData = [
  { name: 'Jan', offline: 65, online: 70 },
  { name: 'Feb', offline: 68, online: 75 },
  { name: 'Mar', offline: 75, online: 82 },
  { name: 'Apr', offline: 85, online: 88 },
  { name: 'May', offline: 82, online: 85 },
  { name: 'Jun', offline: 80, online: 82 },
  { name: 'Jul', offline: 85, online: 80 }
];

const MetricCard = ({ value, label, growth, trend }) => (
  <div className="metric-card">
    <div className="metric-header">
      <div className="metric-value">{value}</div>
      {growth && <div className="metric-growth">↑ {growth}</div>}
    </div>
    <div className="metric-label">{label}</div>
    {trend && <div className="metric-trend">{trend}</div>}
  </div>
);

const KPIDashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="Rwanda Energy Group" />
        </div>
        
        <nav className="menu">
          <div className="menu-section">
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

          <h3>OTHERS</h3>
          <ul>
            <li><span>❓</span> Help Centre</li>
            <Link to="/settings" className="menu-item">
              <li><span>⚙️</span> Settings</li>
            </Link>
            <li className="logout"><span>🚪</span> Log out</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
      <header>
          <h2>KPIs Dashboard</h2>
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

        <div className="metrics-grid">
          <MetricCard
            value="75%"
            label="Grid Health"
            growth="10.2"
            trend="+1.01% this week"
          />
          <MetricCard
            value="23,283.5"
            label="Total Grid Component"
            growth="3.1"
            trend="+0.49% this week"
          />
          <MetricCard
            value="124,854 Kwh"
            label="Energy Usage"
            growth="7.2"
          />
          <MetricCard
            value="12"
            label="Faults Detected"
            growth="10.2"
            trend="+1.01% this week"
          />
        </div>

        <div className="chart-section">
          <div className="chart-header">
            <h2>Asset Optimization</h2>
            <div className="chart-controls">
              <div className="legend">
                <span className="legend-item">
                  <span className="dot offline"></span>
                  Offline Assets
                </span>
                <span className="legend-item">
                  <span className="dot online"></span>
                  Online Assets
                </span>
              </div>
              <select>
                <option>Monthly</option>
              </select>
            </div>
          </div>
          <div className="chart">
            <LineChart width={800} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="offline" stroke="#1f2937" dot={false} />
              <Line type="monotone" dataKey="online" stroke="#f97316" dot={false} />
            </LineChart>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KPIDashboard;