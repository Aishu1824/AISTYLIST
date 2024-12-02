import React from 'react';
import Sidebar from '../components/sidebar';
import MainContent from '../components/maincontent';
import Content from './content1';
//import './HomePage.css'; // If you want specific page styles

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="sidebar">
      <Sidebar  />
        
      </div>
      <div className="main-container">
        <MainContent />
        <Content/>
      </div>
    </div>
  );
};

export default HomePage;
