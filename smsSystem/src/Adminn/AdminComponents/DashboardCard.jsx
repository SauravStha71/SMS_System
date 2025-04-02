import React from 'react';
import { FaComments, FaUsers, FaMoneyCheckAlt } from 'react-icons/fa';

const DashboardCard = () => {
  const cards = [
    {
      icon: <FaComments />,
      title: 'Number of sms sent today',
      value: '189',
    },
    {
      icon: <FaUsers />,
      title: 'Numbers of Users',
      value: '569',
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: 'People with due payment',
      value: '230',
    },
  ];

  return (
    <>
      {/* Inline style for bounce animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }

          .hover-bounce:hover {
            animation: bounce 0.4s ease;
          }
        `}
      </style>

      <div
        className="mx-auto mt-2 w-[90%] max-w-[680px] h-[300px] rounded-[30px] px-6 py-10 shadow-md space-y-4 border border-[#C6DCEB]"
        style={{
          background: 'radial-gradient(circle at center, #FFFFFF 0%, #B0D3E5 100%)',
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="hover-bounce flex items-center justify-between bg-[#EEF0FF] rounded-xl shadow-lg px-6 py-2 w-full max-w-xl mx-auto transition duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#D8E4FF] text-blue-600 p-2.5 rounded-full text-xl">
                {card.icon}
              </div>
              <span className="text-gray-800 font-medium text-lg">{card.title}</span>
            </div>

            <div
              className="bg-gradient-to-r from-[#3F83F8] to-white text-[#FFFFFF] font-bold px-6 py-1 rounded-full text-lg shadow-md"
              style={{
                textShadow: '0 2px 2px rgba(0, 0.2, 0, 0.2)',
              }}
            >
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCard;
