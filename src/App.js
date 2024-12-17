import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/newsidebar";

import HomePage from './pages/homepage';
import NextPage from './pages/nextpage';
import ChatPage from './pages/chatpage';
import FinalPage from './pages/finalpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nextpage" element={<NextPage />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/finalpage" element={<FinalPage />} />
      </Routes>
    </Router>
  );
};

export default App;

