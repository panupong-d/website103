import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import Home component
import RecommendedFood from './components/RecommendedFood'; // Import RecommendedFood component
import ImportantPlaces from './components/ImportantPlaces';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Activities from './components/Activities';
import CheckinSpots from './components/CheckinSpots';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommended-food" element={<RecommendedFood />} />
      <Route path="/important-places" element={<ImportantPlaces />} />
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path='/activities' element={<Activities/>} />
      <Route path="/checkin-spots" element={<CheckinSpots />} />
    </Routes>
  );
}

export default App;
