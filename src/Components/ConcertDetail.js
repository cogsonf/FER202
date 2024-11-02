// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ConcertDetail = () => {
//   const { id } = useParams(); // Lấy id từ URL
//   const [concert, setConcert] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/Concerts/${id}`)
//       .then((response) => response.json())
//       .then((data) => setConcert(data))
//       .catch((error) => console.error('Error fetching concert:', error));
//   }, [id]);

//   if (!concert) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-2">{concert.Name}</h2>
//       <p>{concert.description}</p>
//       <p><strong>Price:</strong> {concert.price.toLocaleString()} VND</p>
//       <p><strong>Date:</strong> {concert.date}</p>
//       <p><strong>Address:</strong> {concert.Address}</p>
//       <img src={concert.image} alt={concert.Name} className="w-full h-auto mt-4" />
//     </div>
//   );
// };

// export default ConcertDetail;
// src/components/ConcertDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ConcertDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [concert, setConcert] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/Concerts/${id}`)
      .then((response) => response.json())
      .then((data) => setConcert(data))
      .catch((error) => console.error('Error fetching concert:', error));
  }, [id]);

  if (!concert) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">{concert.Name}</h2>
      <p>{concert.description}</p>
      <p><strong>Price:</strong> {concert.price.toLocaleString()} VND</p>
      <p><strong>Date:</strong> {concert.date}</p>
      <p><strong>Address:</strong> {concert.Address}</p>
      <img src={concert.image} alt={concert.Name} className="w-full h-auto mt-4" />
    </div>
  );
};

export default ConcertDetail;
