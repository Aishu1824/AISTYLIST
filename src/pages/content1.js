import React from "react";
import { useNavigate } from "react-router-dom";
import "./content1.css";


const Content = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate("/nextpage"); 
  };

  return (
    <div className="content-section">
      <span className="content-title">AI Stylist</span>
      <p className="content-description">Create an outfit tailored to your needs.</p>
      <button className="start-now-btn" onClick={handleStartNow}>
        Start Now
      </button>
      <div className="image-gallery">
        <img src="/assests/images/image1.png" alt="Fashion 1" />
        <img src="/assests/images/image2.png" alt="Fashion 2" />
        <img src="/assests/images/image3.png" alt="Fashion 3" />
      </div>
    </div>
  );
};

export default Content;
