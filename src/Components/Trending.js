import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import slide1 from '../assets/images/1.jpg';
import slide2 from '../assets/images/2.png';
import slide3 from '../assets/images/3.jpg';
import slide4 from '../assets/images/4.jpg';
import slide5 from '../assets/images/5.jpg';
import slide6 from '../assets/images/6.jpg';
import slide7 from '../assets/images/7.jpg';
import slide8 from '../assets/images/8.jpg';

const images = [
  { src: slide1, title: 'Chương trình hoà nhạc Love Unfolds - The CDs', price: 'Từ 600.000đ', date: '02 tháng 11, 2024' },
  { src: slide2, title: '[Acrylic Workshop] Workshop về tranh cá nhân X Chill tháng 10 - Zest Art', price: 'Từ 440.000đ', date: '29 tháng 10, 2024' },
  { src: slide3, title: 'LULULOA SHOW VĂN MAI HƯƠNG | CẦU VỒNG LẤP LÁNH', price: 'Từ 450.000đ', date: '16 tháng 11, 2024' },
  { src: slide4, title: 'Sân khấu Thiên Long - Cao Quân Bảo Đại Chiến Dư Hồng', price: 'Từ 300.000đ', date: '21 tháng 12, 2024' },
  { src: slide5, title: 'Concert Autumn Vibes', price: 'Từ 550.000đ', date: '05 tháng 11, 2024' },
  { src: slide6, title: 'Digital Art Workshop - New Horizons', price: 'Từ 400.000đ', date: '10 tháng 11, 2024' },
  { src: slide7, title: 'Dance Performance - Stardust Dreams', price: 'Từ 480.000đ', date: '20 tháng 11, 2024' },
  { src: slide8, title: 'Stage Play - Timeless Journey', price: 'Từ 520.000đ', date: '25 tháng 12, 2024' },
];

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 4;
  const totalSlides = images.length;

  const handleNext = () => {
    if (currentIndex < totalSlides - visibleSlides) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(totalSlides - visibleSlides);
    }
  };

  const carouselContainerStyle = {
    width: '80%',
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Thêm shadow box
    borderRadius: '10px', // Bo tròn các góc
  };

  const slideContainerStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
  };

  const slideStyle = {
    flex: `0 0 calc(98.5% / ${visibleSlides})`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px',
  };

  const imgStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const infoBoxStyle = {
    textAlign: 'left',
    backgroundColor: 'rgb(42, 45, 52)',
    padding: '10px',
    borderRadius: '5px',
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const priceDateContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 'auto',
    paddingLeft: '10px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Sự kiện xu hướng</h2>
      <div style={carouselContainerStyle}>
        <div style={slideContainerStyle}>
          {images.map((image, index) => (
            <div key={index} style={slideStyle}>
              <img src={image.src} style={imgStyle} alt={`Slide ${index + 1}`} />
              <div style={infoBoxStyle}>
                <h5>{image.title}</h5>
                <div style={priceDateContainerStyle}>
                  <p style={{ margin: '0', color: 'green', fontSize: '20px' }}>{image.price}</p>
                  <p style={{ margin: '0', fontSize: '20px' }}>{image.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrev}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid white',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid white',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Trending;
