import React from 'react';
import { Link } from 'react-router-dom';

import Numeral from 'numeral';

import './Card.scss';

const Card = ({ country }) => {
  const { flag, name, population, region, capital, alpha2Code } = country;

  return (
    <div className="card">
      <Link to={`/country/${alpha2Code}`} className="card__link">
        <img className="card__flag" src={flag} alt={`country flag of ${name}`} />
        <div className="card__body">
          <h3 className="card__body-title">{name}</h3>
          <div className="card__body-detail">
            <label>Populations: </label>

            <span>{Numeral(population).format(0, 0)}</span>
          </div>
          <div className="card__body-detail">
            <label>Region: </label>
            <span>{region}</span>
          </div>
          <div className="card__body-detail">
            <label>Capital: </label>
            <span>{capital}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
