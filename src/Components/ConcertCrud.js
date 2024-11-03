// import React, { useEffect, useState } from 'react';

// const ConcertCrud = () => {
//   const [concerts, setConcerts] = useState([]);
//   const [formData, setFormData] = useState({
//     id: '',
//     type: '',
//     Name: '',
//     description: '',
//     price: '',
//     date: '',
//     Address: '',
//     image: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     fetchConcerts();
//   }, []);

//   const fetchConcerts = async () => {
//     const response = await fetch('http://localhost:5000/Concerts');
//     const data = await response.json();
//     setConcerts(data);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isEditing) {
//       await fetch(`http://localhost:5000/Concerts/${formData.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       setIsEditing(false);
//     } else {
//       // Tạo ID mới dựa trên ID lớn nhất hiện có
//       const maxId = concerts.reduce((max, concert) => Math.max(max, concert.id), 0);
//       const newConcert = { ...formData, id: maxId + 1 };

//       await fetch('http://localhost:5000/Concerts', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newConcert),
//       });
//     }

//     // Reset form và cập nhật danh sách concert
//     setFormData({
//       id: '',
//       type: '',
//       Name: '',
//       description: '',
//       price: '',
//       date: '',
//       Address: '',
//       image: ''
//     });
//     fetchConcerts();
//     setShowForm(false);
//   };

//   const handleEdit = (concert) => {
//     setFormData(concert);
//     setIsEditing(true);
//     setShowForm(true);
//   };

//   const handleAddNew = () => {
//     setFormData({
//       id: '',
//       type: '',
//       Name: '',
//       description: '',
//       price: '',
//       date: '',
//       Address: '',
//       image: ''
//     });
//     setIsEditing(false);
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:5000/Concerts/${id}`, { method: 'DELETE' });
//     fetchConcerts();
//   };

//   return (
//     <div style={{ width: '80%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
//       <h2 style={{ textAlign: 'center', color: '#333' }}>Concert Management</h2>

//       <button
//         style={{
//           display: 'block',
//           margin: '20px auto',
//           padding: '10px 20px',
//           fontSize: '16px',
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           border: 'none',
//           cursor: 'pointer',
//           borderRadius: '5px'
//         }}
//         onClick={handleAddNew}
//       >
//         {showForm ? 'Hide Form' : 'Add Concert'}
//       </button>

//       {showForm && (
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '10px',
//             maxWidth: '400px',
//             margin: '20px auto',
//             padding: '20px',
//             border: '1px solid #ddd',
//             borderRadius: '5px',
//             backgroundColor: '#f9f9f9'
//           }}
//         >
//           <input type="text" name="type" placeholder="Type (special/normal)" value={formData.type} onChange={handleChange} required />
//           <input type="text" name="Name" placeholder="Name" value={formData.Name} onChange={handleChange} required />
//           <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
//           <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
//           <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} required />
//           <input type="text" name="Address" placeholder="Address" value={formData.Address} onChange={handleChange} />
//           <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
//           <button
//             type="submit"
//             style={{
//               backgroundColor: '#4CAF50',
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//               borderRadius: '5px',
//               padding: '8px',
//               fontSize: '14px'
//             }}
//           >
//             {isEditing ? 'Update' : 'Add'} Concert
//           </button>
//         </form>
//       )}

//       <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Type</th>
//             <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Name</th>
//             <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Description</th>
//             <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Price</th>
//             <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Date</th>
//             <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Address</th>
//             <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Image</th>
//             <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {concerts.map((concert) => (
//             <tr key={concert.id} style={{ backgroundColor: concerts.indexOf(concert) % 2 === 0 ? '#f2f2f2' : 'white' }}>
//               <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.type}</td>
//               <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.Name}</td>
//               <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.description}</td>
//               <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.price.toLocaleString()} VND</td>
//               <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.date}</td>
//               <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.Address}</td>
//               <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
//                 <img src={concert.image} alt={concert.Name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
//               </td>
//               <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
//                 <button
//                   style={{
//                     margin: '5px',
//                     padding: '5px 10px',
//                     fontSize: '14px',
//                     backgroundColor: '#FFA500',
//                     color: 'white',
//                     border: 'none',
//                     cursor: 'pointer',
//                     borderRadius: '3px'
//                   }}
//                   onClick={() => handleEdit(concert)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   style={{
//                     margin: '5px',
//                     padding: '5px 10px',
//                     fontSize: '14px',
//                     backgroundColor: '#FF4500',
//                     color: 'white',
//                     border: 'none',
//                     cursor: 'pointer',
//                     borderRadius: '3px'
//                   }}
//                   onClick={() => handleDelete(concert.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ConcertCrud;
import React, { useEffect, useState } from 'react';

const ConcertCrud = () => {
  const [concerts, setConcerts] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    type: '',
    Name: '',
    description: '',
    price: '',
    date: '',
    Address: '',
    image: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchConcerts();
  }, []);

  const fetchConcerts = async () => {
    const response = await fetch('http://localhost:5000/Concerts');
    const data = await response.json();
    setConcerts(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      await fetch(`http://localhost:5000/Concerts/${formData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setIsEditing(false);
    } else {
      // Tính toán ID lớn nhất hiện có
      const maxId = concerts.reduce((max, concert) => Math.max(max, Number(concert.id)), 0);
      const newConcert = { ...formData, id: maxId + 1 };

      await fetch('http://localhost:5000/Concerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newConcert),
      });
    }

    setFormData({
      id: '',
      type: '',
      Name: '',
      description: '',
      price: '',
      date: '',
      Address: '',
      image: ''
    });
    fetchConcerts();
    setShowForm(false);
  };

  const handleEdit = (concert) => {
    setFormData(concert);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setFormData({
      id: '',
      type: '',
      Name: '',
      description: '',
      price: '',
      date: '',
      Address: '',
      image: ''
    });
    setIsEditing(false);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/Concerts/${id}`, { method: 'DELETE' });
    fetchConcerts();
  };

  return (
    <div style={{ width: '80%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Concert Management</h2>

      <button
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
        onClick={handleAddNew}
      >
        {showForm ? 'Hide Form' : 'Add Concert'}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '400px',
            margin: '20px auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9'
          }}
        >
          <input type="text" name="type" placeholder="Type (special/normal)" value={formData.type} onChange={handleChange} required />
          <input type="text" name="Name" placeholder="Name" value={formData.Name} onChange={handleChange} required />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
          <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} required />
          <input type="text" name="Address" placeholder="Address" value={formData.Address} onChange={handleChange} />
          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              padding: '8px',
              fontSize: '14px'
            }}
          >
            {isEditing ? 'Update' : 'Add'} Concert
          </button>
        </form>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Type</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Price</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Address</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Image</th>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#4CAF50', color: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {concerts.map((concert) => (
            <tr key={concert.id} style={{ backgroundColor: concerts.indexOf(concert) % 2 === 0 ? '#f2f2f2' : 'white' }}>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.type}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.Name}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.description}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.price.toLocaleString()} VND</td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.date}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{concert.Address}</td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                <img src={concert.image} alt={concert.Name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                <button
                  style={{
                    margin: '5px',
                    padding: '5px 10px',
                    fontSize: '14px',
                    backgroundColor: '#FFA500',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '3px'
                  }}
                  onClick={() => handleEdit(concert)}
                >
                  Edit
                </button>
                <button
                  style={{
                    margin: '5px',
                    padding: '5px 10px',
                    fontSize: '14px',
                    backgroundColor: '#FF4500',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '3px'
                  }}
                  onClick={() => handleDelete(concert.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConcertCrud;
