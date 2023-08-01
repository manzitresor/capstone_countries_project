/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Country({ country }) {
  const {
    name, region, flags,
  } = country;
  return (
    <>
      <div className="card">
        <NavLink to={`/details/${name}`} className="navLink">
          <div className="image">
            <img src={flags} alt="country" />
          </div>
          <h1 className="country-heading-one">
            {name}
          </h1>
          <h4 className="country-heading-two">
            Region:
            {' '}
            {region}
          </h4>
        </NavLink>
      </div>
    </>
  );
}

export default Country;

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flags: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
  }).isRequired,
};
