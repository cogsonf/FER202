import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide1 from '../assets/images/1.jpg';
import slide2 from '../assets/images/2.png';
import slide3 from '../assets/images/3.jpg';
import slide4 from '../assets/images/4.jpg';
import trailer1 from '../assets/trailers/trailer1.mp4';
import trailer2 from '../assets/trailers/trailer2.mp4';
import trailer3 from '../assets/trailers/trailer3.mp4';
import trailer4 from '../assets/trailers/trailer4.mp4';

const images = [slide1, slide2, slide3, slide4];
const trailers = [trailer1, trailer2, trailer3, trailer4];

const Carousel = () => {
    const extendedImages = [images[images.length - 1], ...images, images[0]];
    const extendedTrailers = [trailers[trailers.length - 1], ...trailers, trailers[0]];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null); // Lưu trạng thái slide đang được hover

    const handleNext = () => {
        if (!isTransitioning) {
            setCurrentIndex(currentIndex + 1);
            setIsTransitioning(true);
        }
    };

    const handlePrev = () => {
        if (!isTransitioning) {
            setCurrentIndex(currentIndex - 1);
            setIsTransitioning(true);
        }
    };

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);

                if (currentIndex === extendedImages.length - 1) {
                    setCurrentIndex(1);
                }
                if (currentIndex === 0) {
                    setCurrentIndex(extendedImages.length - 2);
                }
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, extendedImages.length, isTransitioning]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const carouselContainerStyle = {
        width: '80%',
        height: '400px',
        overflow: 'hidden',
        position: 'relative',
        margin: '0 auto',
        borderRadius: '33px', // Thêm thuộc tính này để bo tròn các slide
    };

    const slideContainerStyle = {
        display: 'flex',
        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        transform: `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 10}px))`,
        
    };

    const slideStyle = {
        minWidth: '50%',
        height: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        marginRight: '10px',
        borderRadius: '10px', // Thêm thuộc tính này để bo tròn các slide
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const videoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const overlayStyle = {
    position: 'absolute',
    bottom: '50px', // Đưa toàn bộ overlay lên trên một chút
    left: '20px',
    color: 'white',
    backgroundColor: 'transparent',
    padding: '20px',
    borderRadius: '8px',
    width: 'calc(100% - 40px)',
};


    const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    };

    const datePriceStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1rem',
        marginBottom: '10px',
    };

    const buttonStyle = {
        backgroundColor: 'white',
        color: '#333',
        padding: '10px 20px',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px', // Thêm khoảng cách phía trên nút nếu cần
    };
    
    return (
        <div style={carouselContainerStyle}>
            <div style={slideContainerStyle}>
                {extendedImages.map((image, index) => (
                    <div 
                        key={index} 
                        style={slideStyle} 
                        onMouseEnter={() => handleMouseEnter(index)} 
                        onMouseLeave={handleMouseLeave}
                    >
                        {hoveredIndex === index ? (
                            <video 
                                src={extendedTrailers[index]} 
                                autoPlay 
                                loop 
                                muted
                                style={videoStyle}
                            />
                        ) : (
                            <img src={image} style={imgStyle} alt={`Slide ${index + 1}`} />
                        )}
                        <div style={overlayStyle}>
                            <div style={titleStyle}>Concert {index + 1}</div>
                            <div style={datePriceStyle}>
                                <span>Giá từ: 750.000đ</span>
                                <span>22 tháng 11, 2024</span>
                            </div>
                            <button style={buttonStyle}>Xem chi tiết</button>
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
                    left: '0',
                    zIndex: 1,
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                    right: '0',
                    zIndex: 1,
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
