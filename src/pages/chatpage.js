import React from 'react';
import Sidebar from '../components/newsidebar';
import MainContent from '../components/maincontent';
import Content from './content3';

const ChatPage = () => {
  return (
    <div className="nextpage">
      <Sidebar page="chatpage" />;
      
      <div className="main-container">
        <MainContent />
        <Content />
      </div>
    </div>
  );
};

export default ChatPage;
