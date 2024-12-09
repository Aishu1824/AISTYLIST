import React from 'react';
import './sidebar.css'; // Include your custom CSS file

const Sidebar = () => {
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
          <h1 className="welcome-title">Compare and edit your looks</h1>
          <p className="welcome-description">
          The AI Stylist saves our customer time and effort by looking across tens of thousands of items and articles in the product catalog and fashion trends knowledge bases. Instead of suggesting a single item or a static outfit, the AI Stylist generates individualized looks across 5 or more catalog items within seconds.
          </p>
        </div>

        {/* List of Features */}
        
      </div>
    </aside>
  );
};

export default Sidebar;