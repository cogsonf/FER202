import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ConcertDetail = () => {
  const { id } = useParams();
  const [concert, setConcert] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3003/concerts/${id}`)
      .then(response => response.json())
      .then(data => setConcert(data));
  }, [id]);

  if (!concert) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{concert.name}</h1>
      <p>{concert.description}</p>
      <p>Date: {concert.date}</p>
      <p>Venue: {concert.venue}</p>
      <p>Price: {concert.price}</p>
    </div>
  );
};

export default ConcertDetail;