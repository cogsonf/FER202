import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ConcertDetail from './Components/ConcertDetail';
import ConcertList from './Components/ConcertList';
import ForgotPassword from './Components/ForgotPassword';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import Register from './Components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/main" element={<MainPage />} /> {/* Trang hiển thị các thành phần giao diện */}
        <Route path="/concerts" element={<ConcertList />} />
        <Route path="/concerts/:id" element={<ConcertDetail />} /> {/* Route cho chi tiết concert */}
      </Routes>
    </Router>
  );
}

export default App;
