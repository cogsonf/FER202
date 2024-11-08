import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const handleForgotPasswordRedirect = () => {
    navigate('/forgot-password');
  };

  const handleLoginOwner = () => {
    navigate('/concertscrud'); // Điều hướng đến trang CRUD của concert
  };

  const handleLogin = () => {
    navigate('/main'); // Điều hướng đến trang chính
  };

  return (
    <div className="background bg-[#e8c1a0] flex items-center justify-center min-h-screen">
      <div className="bg-[#0a043c] text-white rounded-lg p-8 w-80">
        <h2 className="text-xl font-semibold text-center mb-2">WELCOME</h2>
        <p className="text-center text-sm mb-6">Sign in to our website</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">
              <i className="fas fa-user mr-2"></i> Email
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded"
              id="email"
              type="text"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">
              <i className="fas fa-lock mr-2"></i> Password
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          
          {/* Forgot Password Button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={handleForgotPasswordRedirect}
              className="text-sm text-[#b392ac] hover:text-white transition duration-300"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Buttons */}
          <div className="space-y-2"> {/* Thêm lớp space-y-2 để tạo khoảng cách giữa các nút */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-[#b392ac] text-white py-2 rounded hover:bg-[#9a798f] transition duration-300"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleLoginOwner}
              className="w-full bg-[#b392ac] text-white py-2 rounded hover:bg-[#9a798f] transition duration-300"
            >
              Login Owner
            </button>
          </div>
        </form>

        {/* Register Button */}
        <div className="text-center mt-4">
          <button
            onClick={handleRegisterRedirect}
            className="text-sm text-[#b392ac] hover:text-white transition duration-300"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
