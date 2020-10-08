import React from 'react';

import './CountryInfo.scss';

const CountryInfo = ({ label, value }) => {
  return (
    <div className="country-info">
      <label>{label}: </label>
      <span>{value}</span>
    </div>
  );
};

export default CountryInfo;
