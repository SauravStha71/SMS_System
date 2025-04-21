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


  // Updated nav links
  const links = [
    { name: "Dashboard", to: "/admin/dashboard" },
    { name: "Preview Data", to: "/admin/preview-data" },
    { name: "Yesterday's Data", to: "/admin/yesterday-data" }, // 👈 Inserted here
    { name: "SMS Report", to: "/admin/sms-report" },
    { name: "Manage User", to: "/admin/manage-users" },
  ];

  return (
    <>
      <style>
        {`
          .admin-header {
            position: relative;
            width: 100%;
            overflow: hidden;
            padding-bottom: 6rem;
          }
          .admin-header__bg {
            height: 200px;
            background-size: cover;
            background-position: center;
          }
          .admin-header__logo {
            position: absolute;
            top: 100px;
            left: 5rem;
            height: 180px;
            border-radius: 9999px;
            border: 4px solid white;
            box-shadow: 0 10px 15px rgba(0,0,0,0.2);
            z-index: 20;
          }
          .admin-header__navbar-container {
            position: absolute;
            top: 170px;
            left:55%;
            transform: translateX(-50%);
            z-index: 10;
          }
          .admin-header__navbar {
            display: flex;
            gap: 3rem;
            align-items: center;
            background: linear-gradient(to bottom, #BFE0F1, white);
            padding: 1rem 3rem;
            border-radius: 40px;
            box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          }
          .admin-header__link {
            font-size: 1rem;
            font-weight: 600;
            color: #333;
            padding: 0.25rem 1rem;
            border-radius: 40px;
            white-space: nowrap;
            transition: all 0.2s ease;
            text-decoration: none;
          }
          .admin-header__link:hover,
          .admin-header__link.active {
            background-color: white;
            color: #111;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .admin-header__link.special:hover {
            color: red;
          }
        `}
      </style>

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
