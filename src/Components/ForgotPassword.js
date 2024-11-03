import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className="background bg-[#e8c1a0] flex items-center justify-center min-h-screen">
      <div className="bg-[#0a043c] text-white rounded-lg p-8 w-80">
        <h2 className="text-xl font-semibold text-center mb-2">Forgot Password</h2>
        <p className="text-center text-sm mb-6">We will send a reset password link to your email.</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">
              <i className="fas fa-envelope mr-2"></i> Email
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <button className="w-full bg-[#b392ac] text-white py-2 rounded mb-4 hover:bg-[#9a798f] transition duration-300">
            Send
          </button>
        </form>
        <div className="text-center mt-4">
          <button onClick={handleLoginRedirect} className="text-sm text-[#b392ac] hover:text-white transition duration-300">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
