import React from "react";
import { useNavigate } from "react-router-dom";
import "./arrowback.css";

const ArrowBack = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="arrow-back" onClick={handleBack}>
      ←
    </div>
  );
};

export default ArrowBack;
