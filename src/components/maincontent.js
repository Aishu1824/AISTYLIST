// import React from 'react';
// import './maincontent.css'; // Main content specific CSS file

// const MainContent = () => {
//   return (
//     <main className="main-content">
//       {/* Empty Main Content */}
//     </main>
//   );
// };

// export default MainContent;
import React from 'react';
import './maincontent.css'; // Main content specific CSS file
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'; // React icons

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="top-bar">
        {/* Back Arrow */}
        <div className="back-arrow">
          <FiArrowLeft />
        </div>

        {/* Feedback Link */}
        <div className="feedback">
          <a href="/feedback" className="feedback-link">Feedback</a>
        </div>

        {/* Visit Amazon Bedrock Button */}
        <div className="visit-btn">
          <a
            href="https://aws.amazon.com/bedrock"
            className="bedrock-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Amazon Bedrock <FiExternalLink />
          </a>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
