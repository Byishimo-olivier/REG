import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebsiteSections from './Components/home';
import Login from './Components/login';
import Dashboard from './Components/MainDashboard';
import GridPlanning from './Components/GridPlanning';
import KPIs from './Components/KPIs';
import Calendar from './Components/Calendar';
import Event from './Components/Event';
import FaultDetection from './Components/FaultDetection';
import PredictiveAnalytics from './Components/predictiveanalytics';
import CustomerEngagement from './Components/customerengagment';
import Report from './Components/Reporting';
import Settings from './Components/Settings';
import TaskScheduler from './Components/TaskScheduler';
import './App.css';

import Layout from './Components/Layout';  // You might need to create this if it doesn't exist

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customer-engagement" element={<CustomerEngagement />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/taskschedule" element={<TaskScheduler />} />
        <Route path = "/reporting" element={<Report />} />
        <Route path="/home" element={<WebsiteSections />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/NetworkPlanning" element={<GridPlanning />} />
        <Route path="/kpi" element={<KPIs />} />
        <Route path="/maintenance" element={
          <Layout>
            <Calendar />
          </Layout>
        } />
        <Route path="/event" element={<Event />} />
        <Route path="/fault-detection" element={<FaultDetection />} />
        <Route path="/predictive-analytics" element={<PredictiveAnalytics />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
