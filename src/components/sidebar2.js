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
          <h1 className="welcome-title">Finalizing the order</h1>
          <p className="welcome-description">
          Even though the customer is finished with their outfit choices, the AI Stylist continues to optimize their shopping experience by suggesting other items the customer might need in New York. Customer prompts, knowledge bases, and agents work together to add the final touches and complete the customer's order.
          </p>
        </div>

        {/* List of Features */}
        
      </div>
    </aside>
  );
};

export default Sidebar;
