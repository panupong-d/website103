import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PopupModal from './PopupModal'; // Import PopupModal component
import './CheckGridSection.css'; // Import custom CSS for check-in spots

const CheckGridSection = () => {
  const navigate = useNavigate(); // Create navigate function
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null); // State to store API data for modal
  const [cards, setCards] = useState([]); // State to store card data

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://charoenkrung103api-ca7c8d01cc0e.herokuapp.com/checkin/id_l');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCards(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = async (id) => {
    try {
      const response = await fetch(`https://charoenkrung103api-ca7c8d01cc0e.herokuapp.com/checkin/id_l/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const [data] = await response.json(); // Extract data from the first item of the array
      setModalData(data);
      setModalShow(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClose = () => setModalShow(false);

  const handleViewAllClick = () => {
    navigate('/checkin-spots'); // Navigate to the "checkin-spots" page
  };

  return (
    <div className="check-grid-section">
      {/* Header Section */}
      <div className="grid-header">
        <h2 className="grid-title">จุดเช็คอิน</h2>
        <Button 
          variant="primary" 
          className="view-all-button" 
          onClick={handleViewAllClick}
        >
          ดูทั้งหมด
        </Button>
      </div>
      <hr className="grid-divider" />
      <div className="card-container">
        {cards.slice(0, 4).map(card => (
          <div key={card.id} className="card" onClick={() => handleCardClick(card.id)}>
            <img src={card.image || 'https://via.placeholder.com/300x200'} alt={card.namethai} className="card-img-top" />
            <div className="card-body text-card">
              <p className="card-text">{card.namethai || 'ไม่มีข้อมูล'}</p>
              <p className="card-text">{card.timeopen || 'ไม่มีข้อมูล'}</p>
            </div>
          </div>
        ))}
      </div>
      {modalData && (
        <PopupModal
          show={modalShow}
          handleClose={handleClose}
          data={modalData}
        />
      )}
    </div>
  );
};

export default CheckGridSection;
