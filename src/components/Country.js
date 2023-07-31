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
    console.log('Looding.....');
  }
  if (error) {
    console.log(error);
  }
  console.log(countries);
  return (
    <>
      <h1>Country</h1>
    </>
  );
}

export default Country;
