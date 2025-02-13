import React from 'react';
import { Link } from 'react-router-dom';
import './predictiveanalytics.css';
import logo from '../Components/images/logo.png';
import profile from '../Components/images/profile.jpg';
import calendar from '../Components/images/calender.jpg';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PredictiveAnalytics = () => {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Health',
        data: [40, 35, 45, 50, 40, 45],
        borderColor: '#10b981',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Moderate',
        data: [20, 15, 25, 30, 25, 20],
        borderColor: '#ef4444',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Critical',
        data: [55, 50, 60, 55, 58, 52],
        borderColor: '#f59e0b',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: '#1e293b',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          stepSize: 20,
          padding: 10,
          callback: function(value) {
            return value + '%';
          }
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          padding: 10,
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  const completionData = [
    { day: 'M', value: 70 },
    { day: 'T', value: 95 },
    { day: 'W', value: 60 },
    { day: 'Th', value: 85 },
    { day: 'F', value: 90 },
    { day: 'S', value: 20 },
  ];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Rwanda Energy Group" />
        </div>
        <div className="menu">
          <div className="menu-section">
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
          <div className="menu-section">
            <span className="menu-label">OTHERS</span>
            <ul>
              <li><span className="icon">❓</span>Help Centre</li>
              <li><span className="icon">⚙️</span>Setting</li>
              <li className="logout"><span className="icon">🚪</span>Log out</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h1>Predictive Analytics</h1>
          <div className="header-right">
            <div className="search-container">
              <input type="text" placeholder="Search for Everything" />
            </div>
            <div className="profile-section">
              <img src={profile} alt="Profile" className="profile-img" />
              <span>C.Prince</span>
            </div>
            <button className="notification-btn">🔔</button>
          </div>
        </header>

        <div className="analytics-grid">
          <div className="chart-card main-chart">
            <div className="chart-header">
              <h2>Predictive Models</h2>
              <div className="chart-controls">
                <div className="legend">
                  <span className="legend-item">
                    <span className="dot health"></span>Health
                  </span>
                  <span className="legend-item">
                    <span className="dot moderate"></span>Moderate
                  </span>
                  <span className="legend-item">
                    <span className="dot critical"></span>Critical
                  </span>
                </div>
                <select defaultValue="Monthly">
                  <option>Monthly</option>
                </select>
              </div>
            </div>
            <div className="chart-container">
              <Line data={lineChartData} options={lineChartOptions} />
              <div className="chart-overlay">
                <div className="percentage-marker" style={{ top: '20%' }}>20%</div>
                <div className="percentage-marker" style={{ top: '70%' }}>70%</div>
                <div className="date-marker">15 Aug 2024</div>
              </div>
            </div>
          </div>

          <div className="chart-card completion-chart">
            <div className="chart-header">
              <h2>Task Completion Rate</h2>
              <select defaultValue="This week">
                <option>This week</option>
              </select>
            </div>
            <div className="completion-bars">
              {completionData.map((item) => (
                <div key={item.day} className="bar-column">
                  <div 
                    className="bar" 
                    style={{ height: `${item.value}%` }}
                  ></div>
                  <span className="day-label">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-card prediction-table">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>ID ↓</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Status Predict ↓</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>#12594</td>
                  <td>Oct 15, 2023</td>
                  <td>312 S Wilmette Ave</td>
                  <td><span className="status health">Health</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>#12490</td>
                  <td>Nov 15, 2021</td>
                  <td>Lathrop Ave, Harvey</td>
                  <td><span className="status moderate">Moderate</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>#12306</td>
                  <td>Nov 02, 2021</td>
                  <td>5685 Bruce Ave, Portage</td>
                  <td><span className="status critical">Critical</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="calendar-card">
            <img src={calendar} alt="Calendar" />
            <div>12th Sept, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
