/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details() {
  const { name } = useParams();
  const { countries } = useSelector((state) => state.country);
  const countryData = countries.filter((country) => country.name.official === name);
  const navigation = useNavigate();
  return (
    <>
      <div>
        <button type="submit" onClick={() => navigation('/')}>back</button>
        {countryData.map((country, index) => (
          <>
            <div className="card" key={index}>
              <img src={country.flags.png} alt="country" />
              <h1 className="country-heading-one">
                Country Name:
                {' '}
                {country.name.official}
              </h1>
              <h4>
                Region:
                {' '}
                {country.region}
              </h4>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Details;
