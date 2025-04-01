import React from 'react';
import logo from '../../assets/logo.jpg';
import bgImage from '../../assets/bg.jpg';

const AdminHeader = () => {
  return (
    <div className="relative w-full overflow-hidden pb-24"> {/* Add padding to push content below navbar */}
      {/* Background image */}
      <div
        className="h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute left-20 top-[100px] h-[180px] rounded-full shadow-lg z-20 border-4 border-white"
      />

      {/* Floating navbar */}
      <div className="absolute top-[190px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-gradient-to-b from-[#BFE0F1] to-white shadow-lg rounded-[40px] px-10 py-2 flex gap-10 items-center">
          {[
            { name: "Dashboard", href: "/admin/dashboard" },
            { name: "Preview Data", href: "/admin/preview-data" },
            { name: "SMS Report", href: "/admin/sms-report" },
            { name: "Manage User", href: "/admin/manage-user" },
            { name: "Log Out", href: "/logout", special: true },
          ].map(({ name, href, special }) => (
            <a
              key={name}
              href={href}
              className={`
                px-4 py-1 transition duration-200
                rounded-[40px] whitespace-nowrap
                text-base font-semibold text-gray-800
                hover:bg-white hover:text-gray-900 hover:font-bold hover:shadow-md
                ${special ? "hover:text-red-500" : ""}
              `}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
