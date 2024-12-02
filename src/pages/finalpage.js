import React from 'react';
import Sidebar from '../components/sidebar';
import MainContent from '../components/maincontent';
import Content from './content4';

const FinalPage = () => {
  return (
    <div className="nextpage">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        <MainContent />
        <Content />
        
      </div>
    </div>
  );
};

export default FinalPage;
