/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />

    </>
  );
}

export default Layout;
