import React from 'react';
import Sidebar from '../components/layouts/Sidebar';
import Header from '../components/layouts/Header';
function NotFound() {  
  return (
    <>
      <Header />
      <Sidebar />
      <section role='main' class='content-body'>
        <h1>404 Page not found</h1>
      </section>
    </>
  );
}

export default NotFound;
