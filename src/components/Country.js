/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Country({ country }) {
  const { name, region, flags } = country;
  return (
    <>
      <div className="card">
        <NavLink to={`/details/${name.official}`} className="navLink">
          <img src={flags.png} alt="country" />
          <h1 className="country-heading-one">
            Country Name:
            {' '}
            {name.official}
          </h1>
          <h4>
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
    name: PropTypes.shape({ official: PropTypes.string.isRequired }).isRequired,
    flags: PropTypes.shape({ png: PropTypes.string.isRequired }).isRequired,
    region: PropTypes.string.isRequired,
  }).isRequired,
};
