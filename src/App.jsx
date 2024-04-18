import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Profiles from './components/Profiles/Profiles';
import adduser from './components/adduser/adduser';
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './components/adduser/adduser';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> Include the Navbar component */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


