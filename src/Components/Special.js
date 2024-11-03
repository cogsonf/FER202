// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Special = () => {
//   const [specialConcerts, setSpecialConcerts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleSlides = 5; // Số lượng slide hiển thị cùng lúc
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch dữ liệu concert từ API và chỉ lấy các concert có type là 'special'
//     fetch('http://localhost:5000/Concerts')
//       .then((response) => response.json())
//       .then((data) => {
//         const filteredConcerts = data.filter((concert) => concert.type === 'special');
//         setSpecialConcerts(filteredConcerts);
//       })
//       .catch((error) => console.error('Error fetching concerts:', error));
//   }, []);

//   const handleNext = () => {
//     if (currentIndex < specialConcerts.length - visibleSlides) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setCurrentIndex(0); // Quay lại đầu nếu đã đến cuối
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     } else {
//       setCurrentIndex(specialConcerts.length - visibleSlides); // Quay về cuối nếu đang ở đầu
//     }
//   };

//   const handleImageClick = (id) => {
//     navigate(`/concerts/${id}`); // Điều hướng đến trang chi tiết của concert
//   };

//   const carouselContainerStyle = {
//     width: '80%',
//     height: '400px',
//     overflow: 'hidden',
//     position: 'relative',
//     margin: '0 auto',
//     boxShadow: '0 4px 20px rgba(0, 0, 0, 5)',
//     borderRadius: '10px',
//   };

//   const slideContainerStyle = {
//     display: 'flex',
//     transition: 'transform 0.5s ease-in-out',
//     transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
//   };

//   const slideStyle = {
//     flex: `0 0 calc(98.5% / ${visibleSlides})`,
//     height: '400px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: '5px',
//   };

//   const imgStyle = {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     cursor: 'pointer', // Thêm con trỏ chuột để chỉ ra rằng ảnh có thể nhấp
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2 style={{ marginBottom: '10px' }}>Sự kiện đặc biệt</h2>
//       <div style={carouselContainerStyle}>
//         <div style={slideContainerStyle}>
//           {specialConcerts.map((concert, index) => (
//             <div key={concert.id} style={slideStyle}>
//               <img
//                 src={concert.image}
//                 style={imgStyle}
//                 alt={`Slide ${index + 1}`}
//                 onClick={() => handleImageClick(concert.id)} // Điều hướng khi nhấp vào ảnh
//               />
//             </div>
//           ))}
//         </div>

//         <button
//           className="carousel-control-prev"
//           type="button"
//           onClick={handlePrev}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '10px',
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             border: '2px solid white',
//             borderRadius: '50%',
//             width: '40px',
//             height: '40px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             zIndex: 1,
//           }}
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>

//         <button
//           className="carousel-control-next"
//           type="button"
//           onClick={handleNext}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             right: '10px',
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             border: '2px solid white',
//             borderRadius: '50%',
//             width: '40px',
//             height: '40px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             zIndex: 1,
//           }}
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Special;
// src/components/Special.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Special = () => {
  const [specialConcerts, setSpecialConcerts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 5; // Số lượng slide hiển thị cùng lúc
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch dữ liệu concert từ API
    fetch('http://localhost:5000/Concerts')
      .then((response) => response.json())
      .then((data) => {
        // Lọc concert có type là "special", sắp xếp theo id giảm dần, và giới hạn 10 kết quả
        const filteredConcerts = data
          .filter((concert) => concert.type === 'special')
          .sort((a, b) => b.id - a.id) // Sắp xếp id giảm dần
          .slice(0, 10); // Giới hạn tối đa 10 kết quả
          
        setSpecialConcerts(filteredConcerts);
      })
      .catch((error) => console.error('Error fetching concerts:', error));
  }, []);

  const handleNext = () => {
    if (currentIndex < specialConcerts.length - visibleSlides) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0); // Quay lại đầu nếu đã đến cuối
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(specialConcerts.length - visibleSlides); // Quay về cuối nếu đang ở đầu
    }
  };

  const handleImageClick = (id) => {
    navigate(`/concerts/${id}`); // Điều hướng đến trang chi tiết của concert
  };

  const carouselContainerStyle = {
    width: '80%',
    height: '400px',
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 5)',
    borderRadius: '10px',
  };

  const slideContainerStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
  };

  const slideStyle = {
    flex: `0 0 calc(98.5% / ${visibleSlides})`,
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    cursor: 'pointer', // Thêm con trỏ chuột để chỉ ra rằng ảnh có thể nhấp
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Sự kiện đặc biệt</h2>
      <div style={carouselContainerStyle}>
        <div style={slideContainerStyle}>
          {specialConcerts.map((concert, index) => (
            <div key={concert.id} style={slideStyle}>
              <img
                src={concert.image}
                style={imgStyle}
                alt={`Slide ${index + 1}`}
                onClick={() => handleImageClick(concert.id)} // Điều hướng khi nhấp vào ảnh
              />
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
