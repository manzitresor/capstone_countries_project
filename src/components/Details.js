import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details() {
  const { name } = useParams();
  const { countries } = useSelector((state) => state.country);
  const countryData = countries.filter((country) => country.name === name);
  const navigation = useNavigate();
  return (
    <>
      <div>
        <div className="world-map">
          <div className="search-background">
            <button type="submit" onClick={() => navigation('/')} className="back-btn">back</button>
            <h1 className="search-heading">World Countries</h1>
          </div>
        </div>
        {countryData.map((country) => (
          <>
            <div className="container" key={country.id}>
              <img src={country.flags} alt="country" />
              <h1 className="country-heading-one">
                Country Name:
                {' '}
                {country.name}
              </h1>
              <h4 className="country-heading-two">
                Region:
                {' '}
                {country.region}
              </h4>
              <h4 className="country-heading-two">
                population:
                {' '}
                {country.population}
              </h4>
              <h4 className="country-heading-two">
                Area:
                {' '}
                {country.area}
              </h4>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Details;
