import React from 'react';
import Sidebar from '../components/newsidebar';
import MainContent from '../components/maincontent';
import Content from './content4';

const FinalPage = () => {
  return (
    <div className="nextpage">
      <Sidebar page="finalpage" />;
      
      <div className="main-container">
        <MainContent />
        <Content />
        
      </div>
    </div>
  );
};

export default FinalPage;
