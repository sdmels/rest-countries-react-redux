import React from 'react';
import { Link } from 'react-router-dom';

import Numeral from 'numeral';

import './Card.scss';
import CountryInfo from '../../components/Countries/CountryInfo/CountryInfo';
import { ThemeConsumer } from '../../Context/theme';

const Card = ({ country }) => {
  const { flag, name, population, region, capital, alpha3Code } = country;

  return (
    <ThemeConsumer>
      {(theme) => (
        <div className={`card ${theme}`}>
          <Link to={`/country/${alpha3Code}`} className="card__link">
            <img className="card__flag" src={flag} alt={`country flag of ${name}`} />
            <div className="card__body">
              <h3 className={`card__body-title ${theme}`}>{name}</h3>
              <CountryInfo label="Populations" value={Numeral(population).format(0, 0)} />
              <CountryInfo label="Region" value={region} />
              <CountryInfo label="Capital" value={capital} />
            </div>
          </Link>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Card;
