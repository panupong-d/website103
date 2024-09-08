import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import "./MapComponent.css"

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const options = {
  disableDefaultUI: true,
  zoomControl: true
};

const MapComponent = ({ lat, lng }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAiGYk4HAvcw13AgpivwxV4MbwrrqS5pO8' // ใส่ API key ของคุณที่นี่
  });

  if (!isLoaded) return <div>Loading...</div>;

  // ฟังก์ชันเปิด Google Maps พร้อมเส้นทาง
  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank'); // เปิดลิงค์ในแท็บใหม่
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={{ lat, lng }}
        options={options}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
      <button onClick={handleGetDirections} className="directions-button">
        เส้นทาง
      </button>
    </div>
  );
};

export default MapComponent;
