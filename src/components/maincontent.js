import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./maincontent.css"; 
import HomePage from "../pages/homepage";

const MainContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1); 
  };

  const hideArrowPaths = ["","/"]; 

  return (
    <main className="main-content">
       {!hideArrowPaths.includes(location.pathname) && (
      <div className="back-arrow-container" onClick={handleBack}>
      <svg
          className="back-arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* <circle cx="12" cy="12" r="10" /> Circle outline */}
          <polyline points="12 8 8 12 12 16" /> {/* Left arrow */}
          <line x1="16" y1="12" x2="8" y2="12" /> {/* Arrow tail */}
        </svg>
      </div>
       )}
       {/* Add the rest of your
        content here */}
    </main>
  );
};

export default MainContent;

