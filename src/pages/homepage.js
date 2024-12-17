import React from 'react';
import Sidebar from '../components/newsidebar';
import MainContent from '../components/maincontent';
import Content from './content1';
import './homepage.css'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar page="homepage" />;
      
      <div className="main-container">
        <MainContent />
        <Content/>
      </div>
    </div>
  );
};

export default HomePage;
