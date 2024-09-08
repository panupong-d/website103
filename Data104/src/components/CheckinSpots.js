import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component
import CheckinGridSection from './CheckinGridSection'; // Import GridSection for check-in spots
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './CheckinSpots.css'; // Import custom CSS if needed

function CheckinSpots() {
  return (
    <div className="checkin-spots-container">
      <Navbar />
      <div className="content">
        <div className='checkin-spots-content h1'>
          <h1>จุดเช็คอิน</h1>
        </div>
        <CheckinGridSection /> {/* Display GridSection for check-in spots */}
      </div>
      <Footer />
    </div>
  );
}

export default CheckinSpots;
