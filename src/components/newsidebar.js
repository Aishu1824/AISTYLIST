import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = ({ page }) => {
        return (
        <aside className="sidebar">
          <div className="sidebar-inner">
            {/* Logo Section */}
            <div className="logo-container">
              <img src="/assests/images/aws.svg" alt="AWS Logo" className="logo" />
              <span className="logo-text">AI Stylist</span>
            </div>
    
            {/* Welcome Content based on Page */}
            <div className="welcome-section">
              {page === "homepage" && (
                <>
                  <h1 className="welcome-title">Hi, welcome to this demo!</h1>
                  <p className="welcome-description">
                    AI Stylist is a new shopping experience for customers. Let’s explore how Amazon Bedrock features come
                    together to make AI Stylist work. In this demo, we’ll go through a few customer prompts and point out
                    tooltips to show you what Amazon Bedrock is doing behind the scenes. We’ll also dive deeper into the
                    following capabilities:
                  </p>
                  <ul className="features-list">
                    <li>
                      <span className="feature-title">Customer prompts</span>
                      <span className="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                          <circle cx="12" cy="12" r="10" fill="#ff9900" />
                          <text x="12" y="16" textAnchor="middle" fontSize="14" fill="#0f1b2a" fontWeight="bold">
                            i
                          </text>
                        </svg>
                      </span>
                    </li>
                    <li>
                      <span className="feature-title">Knowledge bases</span>
                      <span className="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                          <circle cx="12" cy="12" r="10" fill="#ff9900" />
                          <text x="12" y="16" textAnchor="middle" fontSize="14" fill="#0f1b2a" fontWeight="bold">
                            i
                          </text>
                        </svg>
                      </span>
                    </li>
                    <li>
                      <span className="feature-title">Agents</span>
                      <span className="info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                          <circle cx="12" cy="12" r="10" fill="#ff9900" />
                          <text x="12" y="16" textAnchor="middle" fontSize="14" fill="#0f1b2a" fontWeight="bold">
                            i
                          </text>
                        </svg>
                      </span>
                    </li>
                  </ul>
                </>
              )}
    
              {page === "nextpage" && (
                <>
                  <h1 className="welcome-title">Prompting the customer</h1>
                  <p className="welcome-description">
                    Before we can recommend an outfit, we need some information from the customer. The AI Stylist can use a
                    mixture of prompts to help the customer complete their task. Let’s take a look at what happens behind
                    the scenes once the customer tells the AI Stylist what kind of outfit they’re looking for.
                  </p>
                </>
              )}
    
              {page === "chatpage" && (
                <>
                  <h1 className="welcome-title">Finalizing the order</h1>
                  <p className="welcome-description">
                    Even though the customer is finished with their outfit choices, the AI Stylist continues to optimize
                    their shopping experience by suggesting other items the customer might need in New York. Customer
                    prompts, knowledge bases, and agents work together to add the final touches and complete the customer's
                    order.
                  </p>
                </>
              )}
    
              {page === "finalpage" && (
                <>
                  <h1 className="welcome-title">Compare and edit your looks</h1>
                  <p className="welcome-description">
                    The AI Stylist saves our customer time and effort by looking across tens of thousands of items and
                    articles in the product catalog and fashion trends knowledge bases. Instead of suggesting a single item
                    or a static outfit, the AI Stylist generates individualized looks across 5 or more catalog items within
                    seconds.
                  </p>
                </>
              )}
            </div>
          </div>
        </aside>
      );
    };
    
    export default Sidebar;
    