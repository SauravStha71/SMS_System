import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginRegister from './signIn/LoginRegister';
import AdminHeader from './Adminn/AdminPage/AdminHeader';

import DashboardCard from './Adminn/AdminComponents/DashboardCard';
import PreviewDataCard from './Adminn/AdminComponents/PreviewDataCard';
import SMSReportCard from './Adminn/AdminComponents/SMSReportCard';
import ManageUserCard from './Adminn/AdminComponents/ManageUserCard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginRegister />} />

        {/* Admin Pages - with Header + Page */}
        <Route
          path="/admin/dashboard"
          element={
            <>
              <AdminHeader />
              <DashboardCard />
            </>
          }
        />
        <Route
          path="/admin/preview-data"
          element={
            <>
              <AdminHeader />
              <PreviewDataCard />
            </>
          }
        />
        <Route
          path="/admin/sms-report"
          element={
            <>
              <AdminHeader />
              <SMSReportCard />
            </>
          }
        />
        <Route
  path="/admin/manage-users"
  element={
    <>
      <AdminHeader />
      <ManageUserCard
        users={[
          { name: "Alice Sharma", email: "alice@example.com", role: "Admin" },
          { name: "Bikash Thapa", email: "bikash@example.com", role: "User" },
          { name: "Sita Ram", email: "sita@example.com", role: "Manager" },
        ]}
      />
    </>
  }
/>

      </Routes>
    </Router>
  );
};

export default App;
