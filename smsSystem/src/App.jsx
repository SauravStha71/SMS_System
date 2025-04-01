import React from 'react';
import AdminHeader from './Adminn/AdminPage/AdminHeader';
import DashboardCard from './Adminn/AdminComponents/DashboardCard';
import { FaComments, FaUsers, FaMoneyCheckAlt } from 'react-icons/fa';

const App = () => {
  return (
    <>
      <AdminHeader />

      {/* Dashboard cards container with radial gradient */}
      <div
        className="mx-auto mt-4 w-[90%] max-w-[700px] h-auto rounded-[30px] px-6 py-16 shadow-md space-y-6 border border-[#C6DCEB]"
        style={{
          background: 'radial-gradient(circle at center, #FFFFFF 0%, #B0D3E5 100%)',
        }}
      >
        <DashboardCard icon={<FaComments />} title="Number of sms sent today" value="189" />
        <DashboardCard icon={<FaUsers />} title="Numbers of Users" value="569" />
        <DashboardCard icon={<FaMoneyCheckAlt />} title="People with due payment" value="230" />
      </div>
    </>
  );
};

export default App;
