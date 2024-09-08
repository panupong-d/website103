import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ListWrapper.css'; // Import custom CSS

function ListWrapper() {
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://charoenkrung103api-ca7c8d01cc0e.herokuapp.com/data103/getimage');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="list-wrapper">
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef} className="slider-fullwidth">
          {images.map((image, index) => (
            <div key={index} className="slide-item">
              <img src={image.image} alt={`Slide ${index + 1}`} className="image" />
            </div>
          ))}
        </Slider>
        <div className="slider-controls">
          <button className="slider-control prev" onClick={() => sliderRef.current.slickPrev()}>&lt;</button>
          <button className="slider-control next" onClick={() => sliderRef.current.slickNext()}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default ListWrapper;
