import React from 'react';
import Sidebar from '../components/newsidebar';
import MainContent from '../components/maincontent';
import Content from './content2';


const NextPage = () => {
  return (
    <div className="nextpage">
       <Sidebar page="nextpage" />
     
      <div className="main-container">
        <MainContent />
        < Content /> 
              </div>
    </div>
  );
};

export default NextPage;
