// AddUser.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './adduser.css';

const AddUser = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to Profiles page with new user data as URL parameters
    history.push(`/profiles?name=${name}&photo=${photo}&phone=${phone}&age=${age}&address=${address}`);
  };

  return (
    <div className="add-user-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Photo URL:</label>
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} required />
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
