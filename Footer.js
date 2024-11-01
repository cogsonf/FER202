import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div className="footer" style={footerStyle}>
            <div style={borderStyle}></div> {/* Đường viền ở trên đầu footer */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 style={headerStyle}>Hotline</h5>
                        <div className="contact-info">
                            <p>
                                <i className="fas fa-phone-alt" style={iconStyle}></i>
                                Thứ 2 - Thứ 6 (8:30 - 18:30)
                            </p>
                            <p className="hotline" style={hotlineStyle}>10001234</p>
                        </div>
                        <h5 style={headerStyle}>Email</h5>
                        <div className="contact-info">
                            <p>
                                <i className="fas fa-envelope" style={iconStyle}></i>
                                support@contic.com
                            </p>
                        </div>
                        <h5 style={headerStyle}>Văn phòng</h5>
                        <div className="contact-info">
                            <p>
                                <i className="fas fa-map-marker-alt" style={iconStyle}></i>
                                FPTU DN
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 style={headerStyle}>Dành cho Khách hàng</h5>
                        <p>
                            <a href="#" style={linkStyle}>Điều khoản sử dụng cho khách hàng</a>
                        </p>
                        <h5 style={headerStyle}>Dành cho Ban Tổ chức</h5>
                        <p>
                            <a href="#" style={linkStyle}>Điều khoản sử dụng cho ban tổ chức</a>
                        </p>
                        <h5 style={headerStyle}>Đăng ký nhận email về các sự kiện hot nhất</h5>
                        <div className="email-input" style={emailInputStyle}>
                            <i className="fas fa-envelope" style={iconStyle}></i>
                            <input className="form-control" placeholder="Your Email" type="email" style={inputStyle} />
                            <button type="button" style={buttonStyle}>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 style={headerStyle}>Về công ty chúng tôi</h5>
                        <p>
                            <a href="#" style={linkStyle}>Quy chế hoạt động</a>
                        </p>
                        <p>
                            <a href="#" style={linkStyle}>Chính sách bảo mật thông tin</a>
                        </p>
                        <p>
                            <a href="#" style={linkStyle}>Cơ chế giải quyết tranh chấp/ khiếu nại</a>
                        </p>
                        <p>
                            <a href="#" style={linkStyle}>Chính sách bảo mật thanh toán</a>
                        </p>
                        <p>
                            <a href="#" style={linkStyle}>Chính sách đổi trả và kiểm hàng</a>
                        </p>
                        <p>
                            <a href="#" style={linkStyle}>Điều kiện vận chuyển và giao nhận</a>
                        </p>
                        <p>
                            <a href="#" style={linkStyle}>Phương thức thanh toán</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Các style được định nghĩa ở đây
const footerStyle = {
    padding: '40px 0',
    backgroundColor: '#rgb(57, 63, 78)',
    color: '#ffffff',
    width: '100%', // Đảm bảo footer chiếm toàn bộ chiều rộng
    position: 'relative',
    bottom: '0',
};

const borderStyle = {
    height: '2px', // Độ dày của đường viền
    backgroundColor: 'white', // Màu sắc của đường viền
    marginBottom: '20px', // Khoảng cách giữa đường viền và nội dung footer
};

const headerStyle = {
    color: '#ffffff',
    marginBottom: '20px',
};

const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
};

const iconStyle = {
    color: '#4caf50',
    marginRight: '10px',
};

const hotlineStyle = {
    color: 'purple',
    fontSize: '24px',
};

const emailInputStyle = {
    position: 'relative',
};

const inputStyle = {
    paddingLeft: '40px',
    border: 'none',
    borderRadius: '5px',
    height: '40px',
};

const buttonStyle = {
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%',
    border: 'none',
    background: 'none',
    color: '#ffffff',
    padding: '0 15px',
};

export default Footer;
