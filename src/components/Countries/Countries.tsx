import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../shared/Card/Card';
import Search from './Search/Search';
import Filter from './Filter/Filter';

import './Countries.scss';

const Countries = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div className="container countries">
      <div className="countries__filter-box">
        <div className="row">
          <Search />
          <Filter />
        </div>
      </div>

      <div className="countries__list">
        {countries.map((country) => (
          <Card key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
