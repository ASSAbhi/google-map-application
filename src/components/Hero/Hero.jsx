import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Hero.css';

const mapContainerStyle = {
  width: '100vw', // Set width to 100% of viewport width
  height: '100vh', // Set height to 100% of viewport height
};

const center = {
  lat: 0,
  lng: 0,
};

const Hero = ({ name, description, imageUrl, profiles }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY_HERE', // Replace with your Google Maps API key
  });

  const [map, setMap] = useState(null);

  useEffect(() => {
    if (profiles && profiles.length > 0) {
      const latestProfile = profiles[profiles.length - 1];
      setCenter({
        lat: latestProfile.latitude,
        lng: latestProfile.longitude,
      });
    }
  }, [profiles]);

  return (
    <div className="hero-card">
      <div className="hero-buttons">
        <Link to="/profiles">
          <button className="profiles-button">Profiles</button>
        </Link>
        <Link to="/adduser">
          <button className="add-user-button">Add User</button>
        </Link>
      </div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
          onLoad={(map) => setMap(map)}
        >
          {profiles && profiles.map((profile, index) => (
            <Marker
              key={index}
              position={{ lat: profile.latitude, lng: profile.longitude }}
            />
          ))}
        </GoogleMap>
      )}
      <img className="hero-image" src={imageUrl} alt={name} />
      <div className="hero-details">
        <h2 className="hero-name">{name}</h2>
        <p className="hero-description">{description}</p>
      </div>
    </div>
  );
};

export default Hero;
