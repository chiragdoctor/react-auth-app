import React, { useEffect, useContext } from 'react';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import AuthContext from '../context/auth/authContext';

function Dashboard() {
  const authContext = useContext(AuthContext);
  const { user, loadUser, logout } = authContext;

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  if (user && user.role === 'student') {
    logout();
    window.location.href = '/login';
  }

  return (
    <>
      <Header />
      <Sidebar />
      <section role='main' className='content-body'>
        <h1>This is faculty dashboard route</h1>
      </section>
    </>
  );
}

export default Dashboard;
