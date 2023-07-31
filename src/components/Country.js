/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countriesSlice';

function Country() {
  const { countries, isLoading, error } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  if (isLoading === true) {
    return (
      <div>
        <h1>Looding.....</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <>
      <div>
        {
         countries.map((country, index) => (
           <div key={index}>
             <img src={country.flags.png} alt="country" />
             <h1>
               Country Name:
               {' '}
               {country.name.official}
             </h1>
             <h4>
               Capital City:
               {' '}
               {country.capital}
             </h4>
           </div>
         ))
        }
      </div>
    </>
  );
}

export default Country;
