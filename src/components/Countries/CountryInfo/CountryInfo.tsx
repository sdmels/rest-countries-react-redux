import React from 'react';
import { ThemeConsumer } from '../../../Context/theme';

import './CountryInfo.scss';

const CountryInfo = ({ label, value }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <div className={`country-info ${theme}`}>
          <span className="label">{label}: </span>
          <span>{value}</span>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default CountryInfo;
