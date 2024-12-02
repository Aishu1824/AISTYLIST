import React from 'react';
import Sidebar from './Sidebar';
//import './side1.css'; // Optional CSS for the page


const Page1 = () => {
  return (
    <div className="page">
      <Sidebar pageTitle="Welcome to Page 1" />
      <main className="content">
        <p>This is the content of Page 1.</p>
      </main>
    </div>
  );
};

export default Page1;
