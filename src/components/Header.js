// src/components/Header.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom

const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/'); // Điều hướng đến trang login (trang chính của bạn)
    };

    const handleRegisterClick = () => {
        navigate('/register'); // Điều hướng đến trang register
    };

    return (
        <>
            <style>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    .navbar-custom {
                        background-color:#9a13b5;
                        padding: 10px 20px;
                    }
                    .navbar-custom .navbar-brand {
                        color: white;
                        font-size: 24px;
                        font-weight: bold;
                    }
                    .navbar-custom .form-control {
                        border-radius: 20px;
                    }
                    .navbar-custom .btn-outline-light {
                        border-radius: 20px;
                    }
                    .navbar-custom .nav-link {
                        color: white;
                        margin-right: 15px;
                    }
                    .navbar-custom .nav-link:hover {
                        color: #ddd;
                    }
                    .navbar-custom .search-bar {
                        width: 400px;
                    }
                    .navbar-custom .btn-search {
                        border-radius: 0 20px 20px 0;
                    }
                    .navbar-custom .btn-create-event {
                        border-radius: 20px;
                        margin-right: 15px;
                    }
                    .navbar-custom .btn-tickets {
                        margin-right: 15px;
                    }
                    .navbar-custom .auth-links {
                        color: white;
                    }
                    .navbar-custom .auth-links button {
                        background: none;
                        border: none;
                        color: white;
                        margin-left: 10px;
                        cursor: pointer;
                    }
                    .navbar-custom .auth-links button:hover {
                        color: #ddd;
                    }
                    .navbar-secondary {
                        background-color: #000;
                        padding: 10px 20px;
                    }
                    .navbar-secondary .nav-link {
                        color: white;
                        margin-right: 15px;
                    }
                    .navbar-secondary .nav-link:hover {
                        color: #ddd;
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg navbar-custom">
                <a className="navbar-brand" href="/" onClick={() => navigate('/main')}>ConTic</a>
                <div className="collapse navbar-collapse">
                    <form className="d-flex mx-auto search-bar">
                        <input className="form-control me-2" type="search" placeholder="Bạn tìm gì hôm nay?" aria-label="Search" />
                        <button className="btn btn-outline-light btn-search" type="submit">Tìm kiếm</button>
                    </form>
                    <button className="btn btn-outline-light btn-create-event" type="button">Tạo sự kiện</button>
                    <button className="btn btn-outline-light btn-tickets" type="button"><i className="fas fa-ticket-alt"></i> Vé đã mua</button>
                    <div className="auth-links ms-auto">
                    <button onClick={handleLoginClick} className="auth-link" type="button">Đăng nhập</button>
<button onClick={handleRegisterClick} className="auth-link" type="button">Đăng ký</button>

                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-secondary">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={(e) => e.preventDefault()}>Nhạc sống</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={(e) => e.preventDefault()}>Sân khấu & Nghệ thuật</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={(e) => e.preventDefault()}>Thể Thao</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={(e) => e.preventDefault()}>Khác</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
