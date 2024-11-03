import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Trending = () => {
  const [concerts, setConcerts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 4;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch dữ liệu từ db.json và sắp xếp theo id giảm dần, giới hạn 20 concert
    fetch('http://localhost:5000/Concerts')
      .then((response) => response.json())
      .then((data) => {
        const sortedConcerts = data
          .sort((a, b) => b.id - a.id) // Sắp xếp giảm dần theo id
          .slice(0, 20); // Giới hạn số lượng concert là 20
        setConcerts(sortedConcerts);
      })
      .catch((error) => console.error('Error fetching concerts:', error));
  }, []);

  const handleNext = () => {
    if (currentIndex < concerts.length - visibleSlides) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(concerts.length - visibleSlides);
    }
  };

  const handleImageClick = (id) => {
    navigate(`/concerts/${id}`);
  };

  const carouselContainerStyle = {
    width: '80%',
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
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
    cursor: 'pointer',
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
          {concerts.map((concert, index) => (
            <div key={concert.id} style={slideStyle}>
              <img
                src={concert.image}
                style={imgStyle}
                alt={concert.Name}
                onClick={() => handleImageClick(concert.id)}
              />
              <div style={infoBoxStyle}>
                <h5>{concert.Name}</h5>
                <div style={priceDateContainerStyle}>
                <p style={{ margin: '0', color: 'green', fontSize: '20px' }}>Từ {concert.price.toLocaleString()} VND</p>
                  <p style={{ margin: '0', fontSize: '20px' }}>{concert.date}</p>
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
