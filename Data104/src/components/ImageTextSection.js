// src/components/ImageTextSection.js

import React, { useEffect, useState } from 'react';
import './ImageTextSection.css'; // Import custom CSS

const ImageTextSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://charoenkrung103api-ca7c8d01cc0e.herokuapp.com/data1033/history')
      .then(response => response.json())
      .then(data => {
       
        // Assuming data is an array and we want the first item
        setData(data[0]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { image, namethai, info } = data;

  return (
    <div className="image-text-section">
      <div className="image-section">
        <img src={image || ''} alt="Description" className="image" />
      </div>
      <div className="text-section">
        <p className="namethai">{namethai ? namethai.toUpperCase() : 'No name available'}</p>
        <p className="info">{info || 'No info available'}</p>
      </div>
    </div>
  );
};

export default ImageTextSection;
