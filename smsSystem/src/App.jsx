import React from 'react';
import AdminHeader from './Adminn/AdminPage/AdminHeader';
import {BrowserRouter as Router,  Routes,  Route, BrowserRouter,} from 'react-router-dom';
import DashboardCard from './Adminn/AdminComponents/DashboardCard';

const App = () => {
  return (
    <>
      <AdminHeader />
      <DashboardCard />
      <BrowserRouter>
          <Router>
              <Route to="" element="/"/>
          </Router>
      </BrowserRouter>
    </>
  );
};

export default App;
