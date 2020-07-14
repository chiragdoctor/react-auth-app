import React from 'react';
import Sidebar from '../components/layouts/Sidebar';
import Header from '../components/layouts/Header';
function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <section role='main' class='content-body'>
        <h1>This is my dashboard route</h1>
      </section>
    </>
  );
}

export default Dashboard;
