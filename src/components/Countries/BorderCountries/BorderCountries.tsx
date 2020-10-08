import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './BorderCountries.scss';

const BorderCountries = ({ borders = [] }) => {
  const borderCountries = useSelector((state) => {
    return state?.countries
      ?.filter((country) => borders.includes(country.alpha3Code))
      .map((country) => ({ name: country.name, alpha3Code: country.alpha3Code }));
  });

  return (
    <div className="border-countries">
      <strong>Border Countries: </strong>
      <div className="border-countries__list">
        {borderCountries.map((borderCountry) => (
          <Link
            key={borderCountry.alpha3Code}
            to={`/country/${borderCountry.alpha3Code}`}
            className="border-countries__button"
          >
            {borderCountry.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BorderCountries;
