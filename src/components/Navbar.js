/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Country</NavLink>
        <NavLink to="/details">Details</NavLink>
      </nav>

    </>
  );
}

export default Navbar;
