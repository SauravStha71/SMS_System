import React from 'react';
import { FaComments, FaUsers, FaMoneyCheckAlt } from 'react-icons/fa';

const UserDashboard = () => {
  const cards = [
    {
      icon: <FaComments />,
      title: 'Number of SMS Sent Today',
      value: '189',
    },
    {
      icon: <FaUsers />,
      title: 'Number of Users',
      value: '569',
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: 'People with Due Payment',
      value: '230',
    },
  ];

  return (
    <div
      className="mx-auto mt-4 w-[90%] max-w-[700px] h-auto rounded-[30px] px-6 py-16 shadow-md space-y-6 border border-[#C6DCEB]"
      style={{
        background: 'radial-gradient(circle at center, #FFFFFF 0%, #B0D3E5 100%)',
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-[#EEF0FF] rounded-xl shadow-md px-6 py-4 w-full max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#D8E4FF] text-blue-600 p-3 rounded-full text-xl">
              {card.icon}
            </div>
            <span className="text-gray-800 font-medium text-lg">{card.title}</span>
          </div>
          <div className="bg-[#3F83F8] text-white font-semibold px-4 py-1 rounded-full text-lg shadow-sm">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
