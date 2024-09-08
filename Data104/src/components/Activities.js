import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if needed
import Footer from '../components/Footer'; // Adjust path if needed
import './Activities.css'; // Custom CSS for the page
import EventSection from '../components/EventSection'; // Adjust path if needed

function Activities() {
  return (
    <div className="activities-page">
      <Navbar />
      <div className="activities-content">
        <h1>กิจกรรม</h1>
        <hr className="grid-divider" />
        <p>ข้อมูลเกี่ยวกับกิจกรรมที่จัดขึ้นที่ตลาดริมคลองเจริญกรุง 103</p>
        
        {/* EventSection added within activities-content */}
        <EventSection />
      </div>
      <Footer />
    </div>
  );
}

export default Activities;
