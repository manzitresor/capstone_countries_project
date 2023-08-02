/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countriesSlice';
import Country from './Country';

function Countries() {
  const { countries, isLoading, error } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchCountry = countries.filter(
    (country) => country.name.toLowerCase().includes(search.toLowerCase()),
  );

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
      <div className="main-container">
        <div className="world-map">
          <div className="search-background">
            <input type="text" value={search} placeholder="Search Here..." onChange={handleSearch} className="search" />
            <h1 className="search-heading">World Countries</h1>
          </div>
        </div>
        <div className="countries-container">
          {
         searchCountry.map((country) => (
           <Country key={country.id} country={country} />
         ))
        }
        </div>
      </div>
    </>
  );
}

export default Countries;
