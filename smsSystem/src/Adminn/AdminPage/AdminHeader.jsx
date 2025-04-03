import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import bgImage from '../../assets/bg.jpg';

const AdminHeader = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 get current route

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  // Define nav links
  const links = [
    { name: "Dashboard", to: "/admin/dashboard" },
    { name: "Preview Data", to: "/admin/preview-data" },
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
            left: 50%;
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

      <div className="admin-header">
        <div
          className="admin-header__bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <img src={logo} alt="Logo" className="admin-header__logo" />

        <div className="admin-header__navbar-container">
          <div className="admin-header__navbar">
            {links.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                className={`admin-header__link ${
                  location.pathname === to ? 'active' : ''
                }`}
              >
                {name}
              </Link>
            ))}

            <a
              href="/logout"
              onClick={handleLogout}
              className="admin-header__link special"
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
