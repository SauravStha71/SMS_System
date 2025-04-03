import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImage from '../assets/cover.jpg'; 

const LoginRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Simulated login success
    navigate('/admin/dashboard');
  };

  return (
    <div className="login-page flex min-h-screen font-sans">
      {/* LEFT SIDE WITH BACKGROUND IMAGE */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      ></div>

      {/* RIGHT SIDE FORM */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-gray-100">
        <div className="form-box w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            नेपाल विद्युत प्राधिकरण
          </h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
