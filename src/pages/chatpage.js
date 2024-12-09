import React from 'react';
import Sidebar from '../components/sidebar3';
import MainContent from '../components/maincontent';
import Content from './content3';

const ChatPage = () => {
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

export default ChatPage;
