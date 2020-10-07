import React from 'react';

import Filter from './Filter';
import Search from './Search';

import './Countries.scss';

const Countries = () => {
  return (
    <div className="container countries">
      <div className="row countries__filter-box">
        <Search />
        <Filter />
      </div>
    </div>
  );
};

export default Countries;
