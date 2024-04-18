import React, { useState } from 'react';
import './Profiles.css';
import johnImage from '../../assets/1.png';
import janeImage from '../../assets/2.png';
import bobImage from '../../assets/3.jpg';
import aliceImage from '../../assets/6.png'; // Import Alice's image
import evaImage from '../../assets/7.jpg'; // Import Eva's image

const Profile = ({ name, photo, phone, age, address }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="profile-card" onClick={toggleExpanded}>
      <div className="profile-image">
        <img src={photo} alt={name} />
      </div>
      <div className="profile-info">
        <h3>{name}</h3>
      </div>
      {expanded && (
        <div className="profile-details">
          <p>Phone: {phone}</p>
          <p>Age: {age}</p>
          <p>Address: {address}</p>
        </div>
      )}
    </div>
  );
};

const Profiles = () => {
  const profiles = [
    {
      name: 'John Doe',
      photo: johnImage,
      phone: '123-456-7890',
      age: 30,
      address: '123 Main St, City, Country',
    },
    {
      name: 'Jane Smith',
      photo: janeImage,
      phone: '987-654-3210',
      age: 25,
      address: '456 Elm St, Town, Country',
    },
    {
      name: 'Bob Johnson',
      photo: bobImage,
      phone: '555-123-4567',
      age: 40,
      address: '789 Oak St, Village, Country',
    },
    // Additional profiles
    {
      name: 'Alice Brown',
      photo: aliceImage,
      phone: '111-222-3333',
      age: 35,
      address: '321 Pine St, Hamlet, Country',
    },
    {
      name: 'Eva Green',
      photo: evaImage,
      phone: '444-555-6666',
      age: 28,
      address: '555 Cedar St, Suburb, Country',
    },
  ];

  return (
    <div className="profiles-container">
      {profiles.map((profile, index) => (
        <Profile
          key={index}
          name={profile.name}
          photo={profile.photo}
          phone={profile.phone}
          age={profile.age}
          address={profile.address}
        />
      ))}
    </div>
  );
};

export default Profiles;
