import React, { useState, useEffect } from 'react';
import './EventSection.css'; // Ensure this file is correctly created and located

const EventSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch events from API
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://charoenkrung103api-ca7c8d01cc0e.herokuapp.com/dataevent/event');
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();

    // Set up an interval to refresh data every 10 minutes
    const interval = setInterval(() => {
      fetchEvents();
    }, 10 * 60 * 1000); // 10 minutes

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="event-section">
      <div className="event-grid">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
