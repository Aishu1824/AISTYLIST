
// import React from 'react';
import React, { useState, useEffect } from "react";

import './sidebar.css'; // Include your custom CSS file

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
    // Monitor screen size
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768); // Toggle visibility for smaller screens
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); // Check initial screen size
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        {/* Logo Section */}
        <div className="logo-container">
          <img src="/assests/images/aws.svg" alt="AWS Logo" className="logo" />
          <span className="logo-text">AI Stylist</span>
        </div>

        {/* Welcome Content */}
        <div className="welcome-section">
          <h1 className="welcome-title">Hi, welcome to this demo!</h1>
          <p className="welcome-description">
            AI Stylist is a new shopping experience for customers. Let’s explore how Amazon Bedrock features come
            together to make AI Stylist work. In this demo, we’ll go through a few customer prompts and point out
            tooltips to show you what Amazon Bedrock is doing behind the scenes. We’ll also dive deeper into the
            following capabilities:
          </p>
        </div>

        {/* List of Features */}
        
       <ul className="features-list">
       <li>
    <span className="feature-title">Customer prompts</span>
    <span className="info-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
        <circle cx="12" cy="12" r="10" fill="#ff9900" /> {/* Circle with background color */}
        <text x="12" y="16" textAnchor="middle" fontSize="14" fill="#0f1b2a" fontWeight="bold">i</text> {/* Info text */}
      </svg>
    </span>
  </li>
  <li>
    <span className="feature-title">Knowledge bases</span>
    <span className="info-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
        <circle cx="12" cy="12" r="10" fill="#ff9900" />
        <text x="12" y="16" textAnchor="middle" fontSize="14" fill="#0f1b2a" fontWeight="bold">i</text>
      </svg>
    </span>
  </li>
  <li>
    <span className="feature-title">Agents</span>
    <span className="info-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
        <circle cx="12" cy="12" r="10" fill="#ff9900" />
        <text x="12" y="16" textAnchor="middle" fontSize="14" fill="#0f1b2a" fontWeight="bold">i</text>
      </svg>
    </span>
  </li>
</ul>
</div>
    </aside>
  );
};

export default Sidebar;
