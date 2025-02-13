import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './GridPlanning.css'; // Changed to correct CSS file
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
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Register ChartJS components
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

// StatCard component
const StatCard = () => (
  <div className="stat-card">
    <div className="stat-items">
      <div className="stat-item">
        <div className="stat-number">89,935</div>
        <div className="stat-label">Total Grid Connections</div>
        <div className="stat-growth">↑ +10.2</div>
        <div className="stat-trend">+1.01% this week</div>
      </div>
      
      <div className="stat-divider"></div>
      
      <div className="stat-item">
        <div className="stat-number">23,283.5</div>
        <div className="stat-label">Energy Distributed (MWh)</div>
        <div className="stat-growth">↑ +3.1</div>
        <div className="stat-trend">+0.49% this week</div>
      </div>
      
      <div className="stat-divider"></div>
      
      <div className="stat-item">
        <div className="stat-number">124,854</div>
        <div className="stat-label">Energy Consumption (kWh)</div>
        <div className="stat-growth">↑ +7.2</div>
        <div className="stat-trend">+0.82% this week</div>
      </div>
    </div>
  </div>
);

const GridPlanning = () => { // Changed component name to match file
  const position = [-1.9403, 29.8739]; // Rwanda coordinates

  const energyFlowData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Online Assets',
        data: [40, 45, 55, 60, 55, 65],
        borderColor: '#FFA63F',
        backgroundColor: 'transparent',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Offline Assets',
        data: [20, 30, 35, 45, 40, 50],
        borderColor: '#2D3282',
        backgroundColor: 'transparent',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="REG Logo" />
        </div>
        <div className="menu">
          <h3>MENU</h3>
          <ul>
            <li><Link to="/"><span>🏠</span> Home</Link></li>
            <li><Link to="/gridplanning"><span>🔌</span> GridPlanning</Link></li>
            <li><Link to="/operations"><span>⚙️</span> Operations & Maintenance</Link></li>
            <li><Link to="/fault-detection"><span>🔍</span> Fault Detection</Link></li>
            <li><Link to="/predictive-analytics"><span>📊</span> Predictive Analytics</Link></li>
            <li><Link to="/customer-engagement"><span>👥</span> Customer Engagement</Link></li>
            <li><Link to="/reporting"><span>📝</span> Reporting</Link></li>
            <li><Link to="/kpis"><span>📊</span> KPIs</Link></li>
          </ul>
          <h3>OTHERS</h3>
          <ul>
            <li><span>❓</span> Help Centre</li>
            <Link to="/settings" className="menu-item">
              <li><span>⚙️</span> Settings</li>
            </Link>
            <li className="logout"><span>🚪</span> Log out</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h2>Network Planning</h2>
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
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Rwanda Energy Group HQ
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <StatCard />

        <div className="energy-analytics">
          <div className="analytics-header">
            <h3>Asset Optimization</h3>
            <div className="analytics-controls">
              <select defaultValue="Monthly">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>
          </div>
          <div className="analytics-chart">
            <Line data={energyFlowData} options={lineChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPlanning;