import React from 'react';

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="flex items-center justify-between bg-[#EEF0FF] rounded-xl shadow-md px-6 py-4 w-full max-w-2xl mx-auto">
      {/* Icon and title */}
      <div className="flex items-center gap-4">
        <div className="bg-[#D8E4FF] text-blue-600 p-3 rounded-full text-xl">
          {icon}
        </div>
        <span className="text-gray-800 font-regular text-lg">{title}</span>
      </div>

      {/* Value */}
      <div className="bg-[#3F83F8] text-white font-medium px-4 py-1 rounded-full text-lg shadow-sm">
        {value}
      </div>
    </div>
  );
};

export default DashboardCard;
//comment