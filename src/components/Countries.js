/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countriesSlice';
import Country from './Country';

function Countries() {
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
           <Country key={index} country={country} />
         ))
        }
      </div>
    </>
  );
}

export default Countries;
