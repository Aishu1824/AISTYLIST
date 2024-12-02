// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./content2.css"; // Ensure the CSS file matches your desired layout

// const Content = () => {
//   const navigate = useNavigate();

//   const handleGenerateLook = () => {
//     navigate("/chatpage"); // Redirects to the chat page
//   };

//   return (
//     <div className="content-container">
//       <div className="content-header">
//       <img src="/assests/images/ai.svg" alt="Fashion 1" className="ai-logo" />
//         <h3 className="content-title">AI Stylist</h3>
//         <p className="content-subtitle">
//           Hi, I’m your personal stylist. Let’s find an outfit that makes you feel comfortable and confident! Can you tell me more about what you are looking for?
//         </p>
//       </div>
//       <div className="input-section">
//         <textarea
//           className="user-input"
//           placeholder="I am a consultant traveling to New York next week. What kind of outfit should I wear on my first day in the office?"
//         ></textarea>
//         <button className="generate-btn" onClick={handleGenerateLook}>
//           Generate my look
//         </button>
//       </div>
//       <div className="image-gallery">
//         <img src="/assests/images/image1.png" alt="Fashion 1" />
//         <img src="/assests/images/image2.png" alt="Fashion 2" />
//         <img src="/assests/images/image3.png" alt="Fashion 3" />
//       </div>
//     </div>
//   );
// };

// export default Content;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./content2.css"; // Ensure the CSS file matches your desired layout

const Content = () => {
  const navigate = useNavigate();

  const handleGenerateLook = () => {
    navigate("/chatpage"); // Redirects to the chat page
  };

  return (
    <div className="content-container">
      <div className="content-header">
        <img src="/assests/images/ai.svg" alt="AI Stylist Logo" className="ai-logo" />
        <div className="block1">
          <p className="content-title1">AI Stylist</p>
          <p className="content-subtitle">
            Hi, I’m your personal stylist. Let’s find an outfit that makes you feel comfortable and confident! Can you tell me more about what you are looking for?
          </p>
        </div>
      </div>
      <div className="input-section">
        <textarea
          className="user-input"
          placeholder="I am a consultant traveling to New York next week. What kind of outfit should I wear on my first day in the office?"
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
