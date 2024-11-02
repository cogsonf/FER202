import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide1 from '../assets/images/1.jpg';
import slide2 from '../assets/images/2.png';
import slide3 from '../assets/images/3.jpg';
import slide4 from '../assets/images/4.jpg';
import slide5 from '../assets/images/5.jpg';
import slide6 from '../assets/images/6.jpg';
import slide7 from '../assets/images/7.jpg';
import slide8 from '../assets/images/8.jpg';
import slide9 from '../assets/images/9.jpg';
import slide10 from '../assets/images/10.jpg';

const images = [
  slide1, slide2, slide3, slide4, slide5,
  slide6, slide7, slide8, slide9, slide10,
];

const Special = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 5; // Số lượng slide hiển thị cùng lúc
  const totalSlides = images.length;

  const handleNext = () => {
    if (currentIndex < totalSlides - visibleSlides) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0); // Quay lại đầu nếu đã đến cuối
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(totalSlides - visibleSlides); // Quay về cuối nếu đang ở đầu
    }
  };

  const carouselContainerStyle = {
    width: '80%',
    height: '400px',
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 5)', // Thêm shadow box
    borderRadius: '10px', // Để tạo hiệu ứng bo tròn cho các góc
  };

  const slideContainerStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
  };

  const slideStyle = {
    flex: `0 0 calc(98.5% / ${visibleSlides})`, // Chia đều cho 5 slide
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px', // Khoảng cách giữa các slide (nếu cần)
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Sự kiện đặc biệt</h2>
      <div style={carouselContainerStyle}>
        <div style={slideContainerStyle}>
          {images.map((image, index) => (
            <div key={index} style={slideStyle}>
              <img src={image} style={imgStyle} alt={`Slide ${index + 1}`} />
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

export default Special;
