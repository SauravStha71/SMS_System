import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
//import { useNavigate } from "react-router-dom";
import "../styles/index.css";
import coverImage from "../assets/cover.jpg"; // Adjust path if necessary
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "tailwindcss";

const LoginRegister = () => {
  const { login } = useContext(AuthContext); // Get login function from context
  //const navigate = useNavigate();

  // State to toggle between login and register
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "", confirmPassword:"" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      {/* Left Side (Form) */}
      <div className="form-container">
        <div className="form-box">
        <div  className="title">नेपाल विद्युत प्राधिकरण </div>
          {/* Tabs for Login/Register */}
          <div className="toggle-buttons ">
            <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
            <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Register</button>
          </div>


           {/* Form */}
           <div className={`form-content ${isLogin ? "slide-left" : "slide-right"}`}>
            {isLogin ? (

              <form onSubmit={(e) => {
                e.preventDefault(); // Prevent page reload
                login(formData.username, formData.password); // Call login function from AuthContext
              }}>


                <div className="flex items-center p-2 ">
                  <div className="text-gray-500 mr-[0.5vw]" style={{ fontSize: '1.5rem'}}>
                  <FaUser /> 
                  </div>
                   
                 <input type="text" name="username" placeholder="Username" value = {formData.username} onChange={handleInputChange} required className=" w-full pl-10"/>
                 </div>

                 <div className="flex items-center p-2  mt-2">
                 <RiLockPasswordFill className="text-gray-500 mr-[0.5vw]" style={{ fontSize: '1.5rem' }}/>
                 <input type="password" name="password" placeholder="Password" value = {formData.password} onChange={handleInputChange} required className=" w-full pl-10"/>
                 </div>


                <a href="#" className="forgot-password">Forgot Password?</a>
                <button type="submit">Login</button>
              </form>
            ) : (
              <form onSubmit={(e) => {
                e.preventDefault(); // Prevent page reload
                login(formData.username, formData.password); // Call login function from AuthContext
              }}>

                <div className="flex items-center p-2">
                <FaUser className="text-gray-500 mr-[0.5vw]" style={{ fontSize: '1.5rem' }}/>
                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
                </div>

                <div className="flex items-center p-2  mt-2">
                <RiLockPasswordFill className="text-gray-500 mr-[0.5vw]" style={{ fontSize: '1.5rem' }}/> 
                <input type="password" name="password" placeholder="Enter the Password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <div className="flex items-center p-2  mt-2">
                <RiLockPasswordFill className="text-gray-500 mr-[0.5vw]" style={{ fontSize: '1.5rem' }}/>
                <input type="password" name="confirmPassword" placeholder="Re-enter the Password" value={formData.confirmPassword}onChange={handleInputChange} required />
                </div>
                <button type="submit">Register</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
     {/* Right Side: Image (NOT as Background) */}
  
     <div className="image-container">
  <img src={coverImage} alt="Cover" />
</div>

      </div>
    
  );
};

export default LoginRegister;
