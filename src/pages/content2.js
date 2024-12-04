import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./content2.css";

const Content = () => {
  const [typedText, setTypedText] = useState("");
  const navigate = useNavigate();
  const placeholderText =
    "I am a consultant traveling to New York next week. What kind of outfit should I wear on my first day in the office?";

    useEffect(() => {
      let index = 0;
      const length = placeholderText.length; // Cache length for safety
      const typingInterval = setInterval(() => {
        if (index < length) {
          setTypedText(placeholderText.substring(0, index + 1)); // Use substring for precision
          index++;
        } else {
          clearInterval(typingInterval); // Stop interval once done
        }
      }, 50);
    
      // Cleanup interval on component unmount
      return () => clearInterval(typingInterval);
    }, []);

   
    
  const handleGenerateLook = () => {
    navigate("/chatpage"); // Redirects to the chat page
  };

  return (
    <div className="content-container">
      <div className="content-header">
        <img
          src="/assests/images/ai.svg"
          alt="AI Stylist Logo"
          className="ai-logo"
        />
        <div className="block1">
          <p className="content-title1">AI Stylist</p>
          <p className="content-subtitle">
            Hi, I’m your personal stylist. Let’s find an outfit that makes you
            feel comfortable and confident! Can you tell me more about what you
            are looking for?
          </p>
        </div>
      </div>
      <div className="input-section">
        <textarea
          className="user-input"
          placeholder={typedText} // Dynamically update placeholder
          readOnly
        ></textarea>
        <button className="generate-btn" onClick={handleGenerateLook}>
          Generate my look
        </button>
      </div>
      <div className="image-gallery">
        <img src="/assests/images/image1.png" alt="Fashion 1" />
        <img src="/assests/images/image2.png" alt="Fashion 2" />
        <img src="/assests/images/image3.png" alt="Fashion 3" />
      </div>
    </div>
  );
};

export default Content;