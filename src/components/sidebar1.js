import React from 'react';
import './sidebar.css';

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
          <h1 className="welcome-title">Prompting the customer</h1>
          <p className="welcome-description">
          Before we can recommend an outfit, we need some information from the customer. The AI Stylist can use a mixture of prompts to help the customer complete their task. Let’s take a look at what happens behind the scenes once the customer tells the AI Stylist what kind of outfit they’re looking for.
          </p>
        </div>

        {/* List of Features */}
        
      </div>
    </aside>
  );
};

export default Sidebar;
