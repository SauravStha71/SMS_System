import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import bgImage from '../../assets/bg.jpg';
import { Menu, X } from 'lucide-react'; // Optional: clean icons

const AdminHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const links = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Preview Data", to: "/preview-data" },
    { name: "SMS Report", to: "/sms-report" },
    { name: "Manage User", to: "/manage-users" },
  ];

  return (
    <div className="relative w-full h-[35vh] pb-24">
      {/* Background Image */}
      <div
        className="md:h-[130px] h-[120px]  bg-cover object-fill  w-[100vw]  bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute md:top-[13vh] hidden md:block  md:left-[3vw] left-[3vw] md:h-[18vh] h-[92px] rounded-full border-4 border-white z-20"
      />

      {/* Navbar Container */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[90vw] md:w-[70vw] z-10 flex justify-center">
        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-[2.5vw] items-center bg-gradient-to-b from-[#BFE0F1] to-white py-4 px-[2.5vw] rounded-[40px] shadow-lg">
          {links.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className={`text-[1.2vw] font-semibold text-[#333] py-1 px-[1vw] rounded-[40px] whitespace-nowrap transition-all duration-500 no-underline ${
                location.pathname === to
                  ? 'bg-white text-[#111] shadow-md'
                  : ''
              } hover:bg-white hover:text-[#111] hover:shadow-md`}
            >
              {name}
            </Link>
          ))}
          <a
            href="/logout"
            onClick={handleLogout}
            className="text-[1.2vw] font-semibold text-[#333] py-1 px-[1vw] rounded-[40px] whitespace-nowrap transition-all duration-500 no-underline hover:text-red-600"
          >
            Log Out
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex flex-col items-end w-full pr-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black bg-white p-2 rounded-md shadow-md z-30"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="mt-2 w-full bg-gradient-to-b from-[#BFE0F1] to-white rounded-xl shadow-lg flex flex-col items-start p-4 space-y-3 z-20">
              {links.map(({ name, to }) => (
                <Link
                  key={name}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-semibold text-[#333] py-1 px-4 rounded-xl transition-all duration-300 no-underline ${
                    location.pathname === to
                      ? 'bg-white text-[#111] shadow-md'
                      : ''
                  } hover:bg-white hover:text-[#111] hover:shadow-md w-full`}
                >
                  {name}
                </Link>
              ))}
              <a
                href="/logout"
                onClick={(e) => {
                  setMenuOpen(false);
                  handleLogout(e);
                }}
                className="text-base font-semibold text-[#333] py-1 px-4 rounded-xl transition-all duration-300 no-underline hover:text-red-600 w-full"
              >
                Log Out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
