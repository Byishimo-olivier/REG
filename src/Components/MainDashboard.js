import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MainDashboard.css';
import logo from '../Components/images/logo.png';
import profile from '../Components/images/profile.jpg';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const Dashboard = () => {
  const position = [-1.9403, 29.8739]; // Rwanda coordinates

  const gridHealthData = {
    labels: ['Offline', 'Online', 'Standby'],
    datasets: [{
      data: [30, 45, 25],
      backgroundColor: [
        '#2D3282',  // Dark blue for Offline
        '#FF8B9A',  // Pink for Online
        '#FFA63F',  // Orange for Standby
      ],
      borderWidth: 0,
      spacing: 2
    }]
  };

  const doughnutOptions = {
    cutout: '75%',
    plugins: {
      legend: {
        display: false
      }
    },
    rotation: -90,
    circumference: 360,
  };

  const energyFlowData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Online Assets',
        data: [20, 30, 50, 40, 60, 50],
        borderColor: '#FFA63F', // Orange
        tension: 0.4,
        fill: false
      },
      {
        label: 'Offline Assets',
        data: [30, 20, 40, 30, 45, 40],
        borderColor: '#2D3282', // Dark blue
        tension: 0.4,
        fill: false
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20
        },
        grid: {
          color: '#f0f0f0'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      }
    }
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />

      <div className="main-content">
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Dashboard</h1>
          </div>
          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button className="search-icon">🔍</button>
            </div>
            <div className="notification-icon">🔔</div>
            <div className="user-profile">
              <img src={profile} alt="User Profile" />
              <span className="user-name">C.Prince</span>
            </div>
          </div>
        </header>

        <div className="map-section">
          <div className="map-filters">
            <button className="filter-btn customer">Customer Zones</button>
            <button className="filter-btn substations">Substations</button>
            <button className="filter-btn transformers">Transformers</button>
            <button className="filter-btn feeder">Feeder Lines</button>
          </div>
          <div className="map-container">
            <MapContainer 
              center={position} 
              zoom={13} 
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  A sample marker
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <div className="stats-grid">
          <div className="left-column">
            <div className="grid-health-card">
              <div className="card-header">
                <h3>Grid Health</h3>
                <div className="more-options">⋮</div>
              </div>
              <div className="doughnut-wrapper">
                <div className="center-value">452Kwh</div>
                <Doughnut data={gridHealthData} options={doughnutOptions} />
              </div>
              <div className="legend">
                <div className="legend-item">
                  <div className="legend-dot offline"></div>
                  <span>Offline</span>
                  <span className="percentage">30%</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot online"></div>
                  <span>Online</span>
                  <span className="percentage">45%</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot standby"></div>
                  <span>Standby</span>
                  <span className="percentage">25%</span>
                </div>
              </div>
            </div>
            
            <div className="energy-grid-card">
              <div className="energy-header">
                <div className="energy-icon">⚡</div>
                <h3>Energy</h3>
                <select className="week-selector">
                  <option>Week</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
              </div>
              <div className="energy-chart">
                <div className="weekdays">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="day-column">
                      <div className="bar-container">
                        <div className="bar" style={{height: '30%'}}></div>
                      </div>
                      <span>{day}</span>
                    </div>
                  ))}
                </div>
                <div className="energy-value">23,283.5 kWh</div>
              </div>
            </div>
          </div>

          <div className="stats-right-column">
            <div className="stats-cards">
              <div className="stat-card">
                <div className="stat-item">
                  <h4>Total Grid Connection</h4>
                  <div className="stat-value">
                    <h2>89,935</h2>
                    <span className="trend-up">↑ 10.2 +1.01% this week</span>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <h4>Energy Distributed</h4>
                  <div className="stat-value">
                    <h2>23,283.5</h2>
                    <span className="trend-up">↑ 3.1 +0.49% this week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="energy-flow-card">
              <div className="card-header">
                <h3>Energy Flow Analytics</h3>
                <select className="time-selector">
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Daily</option>
                </select>
              </div>
              <div className="chart-container">
                <Line data={energyFlowData} options={lineOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
