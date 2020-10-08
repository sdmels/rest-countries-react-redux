import React from 'react';
import { ThemeConsumer } from '../../../Context/theme';

import './CountryInfo.scss';

const CountryInfo = ({ label, value }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <div className={`country-info ${theme}`}>
          <label>{label}: </label>
          <span>{value}</span>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default CountryInfo;
