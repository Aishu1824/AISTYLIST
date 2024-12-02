// import React from 'react';
// import './sidebar.css'; // Sidebar specific CSS file

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <div className="sidebar-inner">
//         {/* Empty Sidebar */}
//         <div className="logo-container">
//           <img src="/assests/images/aws.svg" alt="AWS Logo" className="logo" />
//           <span className="logo-text">AI Stylist</span>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
import React from 'react';
import './sidebar.css'; // Sidebar-specific CSS file

const Sidebar = ({ pageTitle }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="logo-container">
          <img src="/assests/images/aws.svg" alt="AWS Logo" className="logo" />
          <span className="logo-text">AI Stylist</span>
        </div>
        {/* Dynamic content from props */}
        <h2 className="page-title">{pageTitle}</h2>
      </div>
    </aside>
  );
};

export default Sidebar;

