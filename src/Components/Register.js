// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const navigate = useNavigate();

//   const handleLoginRedirect = () => {
//     navigate('/');
//   };

//   return (
//     <div className="background bg-[#e8c1a0] flex items-center justify-center min-h-screen">
      
//       <div className="bg-[#0a043c] text-white rounded-lg p-8 w-96">
//         <h2 className="text-xl font-semibold text-center mb-2">Create Your Account</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-sm mb-2" htmlFor="userName">
//               <i className="fas fa-user mr-2"></i> Full Name
//             </label>
//             <input
//               className="w-full px-3 py-2 text-black rounded"
//               id="userName"
//               type="text"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm mb-2" htmlFor="email">
//               <i className="fas fa-envelope mr-2"></i> Email
//             </label>
//             <input
//               className="w-full px-3 py-2 text-black rounded"
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm mb-2" htmlFor="userPassword">
//               <i className="fas fa-lock mr-2"></i> Password
//             </label>
//             <input
//               className="w-full px-3 py-2 text-black rounded"
//               id="Password"
//               type="Password"
//               placeholder="Enter your Password"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm mb-2" htmlFor="phone">
//               <i className="fas fa-phone mr-2"></i> Mobile Number
//             </label>
//             <input
//               className="w-full px-3 py-2 text-black rounded"
//               id="phone"
//               type="phone"
//               placeholder="Enter your mobile number"
//               required
//             />
//           </div>
//           <div class="captcha mb-4">
//                 <div class="flex justify-between items-center">
//                     <div class="preview bg-white text-black px-3 py-2 rounded mr-2"></div>
//                     <button type="button" class="captcha-refresh bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600">
//                         <i class="fa fa-refresh"></i> Refresh
//                     </button>
//                 </div>
//             </div>
//             <div className="mb-4">
//             <label className="block text-sm mb-2" >
//               <i className="fas fa-key mr-2"></i> Enter Captcha
//             </label>
//             <input
//               className="w-full px-3 py-2 text-black rounded"
//               placeholder="Enter Captcha"
//               required
//             />
//           </div>
//           <button className="w-full bg-[#b392ac] text-white py-2 rounded hover:bg-[#9a798f] transition duration-300">
//             Register
//           </button>
//         </form>
//         <div className="text-center mt-4">
//         <p class="text-sm text-gray-400 mb-2">Already have an account?</p>
//           <button onClick={handleLoginRedirect} className="text-sm text-[#b392ac] hover:text-white transition duration-300">
//             Back to Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState('');

  // Hàm sinh CAPTCHA ngẫu nhiên
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captchaText);
  };

  // Tạo CAPTCHA khi component tải lần đầu
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className="background bg-[#e8c1a0] flex items-center justify-center min-h-screen">
      <div className="bg-[#0a043c] text-white rounded-lg p-8 w-96">
        <h2 className="text-xl font-semibold text-center mb-2">Create Your Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="userName">
              <i className="fas fa-user mr-2"></i> Full Name
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded"
              id="userName"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="userPassword">
              <i className="fas fa-lock mr-2"></i> Password
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded"
              id="Password"
              type="Password"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="phone">
              <i className="fas fa-phone mr-2"></i> Mobile Number
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded"
              id="phone"
              type="phone"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="captcha mb-4">
            <div className="flex justify-between items-center">
              <div className="preview bg-white text-black px-3 py-2 rounded mr-2">
                {captcha}
              </div>
              <button
                type="button"
                onClick={generateCaptcha}
                className="captcha-refresh bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600"
              >
                <i className="fa fa-refresh"></i> Refresh
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">
              <i className="fas fa-key mr-2"></i> Enter Captcha
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded"
              placeholder="Enter Captcha"
              required
            />
          </div>
          <button className="w-full bg-[#b392ac] text-white py-2 rounded hover:bg-[#9a798f] transition duration-300">
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400 mb-2">Already have an account?</p>
          <button
            onClick={handleLoginRedirect}
            className="text-sm text-[#b392ac] hover:text-white transition duration-300"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
