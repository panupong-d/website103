import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ListWrapper from "./ListWrapper";
import ImageTextSection from "./ImageTextSection";
import GridSection from "./GridSection";
import LocationGrid from "./LocationGrid";
import VideoSection from "./VideoSection";
import "./Home.css"; // ไฟล์ CSS สำหรับหน้า Home
import CheckGridSection from "./CheckGridSection";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <ListWrapper />
        <ImageTextSection />
        <CheckGridSection />
        <GridSection />
        <LocationGrid />
        <VideoSection /> {/* Section สำหรับ YouTube Videos */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
