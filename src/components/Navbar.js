/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Country</NavLink>
      </nav>

    </>
  );
}

export default Navbar;
