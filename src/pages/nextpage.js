import React from 'react';
import Sidebar from '../components/sidebar1';
import MainContent from '../components/maincontent';
import Content from './content2';


const NextPage = () => {
  return (
    <div className="nextpage">
      <div className="sidebar">
        <Sidebar />
      </div>
     
      <div className="main-container">
        <MainContent />
        < Content /> 
              </div>
    </div>
  );
};

export default NextPage;
