
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
            <span className="feature-title">Customer prompts</span> <span className="info-icon">ℹ️</span>
          </li>
          <li>
            <span className="feature-title">Knowledge bases</span> <span className="info-icon">ℹ️</span>
          </li>
          <li>
            <span className="feature-title">Agents</span> <span className="info-icon">ℹ️</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
