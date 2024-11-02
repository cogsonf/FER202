// src/components/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => {
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
                    .navbar-custom .auth-links a {
                        color: white;
                        margin-left: 10px;
                    }
                    .navbar-custom .auth-links a:hover {
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
                <a className="navbar-brand" href="#">ConTic</a>
                <div className="collapse navbar-collapse">
                    <form className="d-flex mx-auto search-bar">
                        <input className="form-control me-2" type="search" placeholder="Bạn tìm gì hôm nay?" aria-label="Search" />
                        <button className="btn btn-outline-light btn-search" type="submit">Tìm kiếm</button>
                    </form>
                    <button className="btn btn-outline-light btn-create-event" type="button">Tạo sự kiện</button>
                    <button className="btn btn-outline-light btn-tickets" type="button"><i className="fas fa-ticket-alt"></i> Vé đã mua</button>
                    <div className="auth-links">
                        <a href="#">Đăng nhập</a> | <a href="#">Đăng ký</a>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-secondary">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nhạc sống</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sân khấu & Nghệ thuật</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Thể Thao</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Khác</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;