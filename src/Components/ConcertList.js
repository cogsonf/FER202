import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/Concerts')
      .then((response) => response.json())
      .then((data) => setConcerts(data))
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Concerts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {concerts.map((concert) => (
          <div key={concert.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold">{concert.Name}</h3>
            <p className="text-gray-600">{concert.description}</p>
            <p><strong>Price:</strong> {concert.price.toLocaleString()} VND</p>
            <p><strong>Date:</strong> {concert.date}</p>
            <p><strong>Address:</strong> {concert.Address}</p>
            <Link to={`/concerts/${concert.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcertList;
