import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './BorderCountries.scss';
import { ThemeConsumer } from '../../../Context/theme';

const BorderCountries = ({ borders = [] }) => {
  const borderCountries = useSelector((state) => {
    return state?.countries
      ?.filter((country) => borders.includes(country.alpha3Code))
      .map((country) => ({ name: country.name, alpha3Code: country.alpha3Code }));
  });

  return (
    <ThemeConsumer>
      {(theme) => (
        <div className="border-countries">
          <strong>Border Countries: </strong>
          <div className="border-countries__list">
            {borderCountries.map((borderCountry) => (
              <Link
                key={borderCountry.alpha3Code}
                to={`/country/${borderCountry.alpha3Code}`}
                className={`border-countries__button ${theme}`}
              >
                {borderCountry.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default BorderCountries;
