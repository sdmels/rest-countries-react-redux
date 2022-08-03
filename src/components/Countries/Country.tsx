import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Numeral from 'numeral';

import { FaArrowLeft } from 'react-icons/fa';
import CountryInfo from './CountryInfo/CountryInfo';
import { Currency } from '../../models/countries';

import './Country.scss';
import BorderCountries from './BorderCountries/BorderCountries';
import { ThemeConsumer } from '../../Context/theme';

const Country = () => {
  const { countryCode } = useParams();

  const country = useSelector((state) => {
    return state?.countries?.filter((country) => country.alpha3Code === countryCode);
  });

  if (!country.length) {
    return null;
  }

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    currencies,
    languages,
    borders = [],
    capital,
    topLevelDomain,
    flag,
  } = country[0];

  return (
    <ThemeConsumer>
      {(theme) => (
        <div className={`container country-detail ${theme}`}>
          <div className="row">
            <div className="country-detail__box">
              <Link to="/" className={`country-detail__back-button ${theme}`}>
                <FaArrowLeft size={14} />
                Back
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="country-detail__content">
              <div className="country-detail__content-left">
                <img src={flag} alt={`Country flag of ${name}`} />
              </div>
              <div className="country-detail__content-right">
                <h2>{name}</h2>
                <div className="row">
                  <div className="col">
                    <CountryInfo label="Native name" value={nativeName} />
                    <CountryInfo label="Population" value={Numeral(population).format(0, 0)} />
                    <CountryInfo label="Region" value={region} />
                    <CountryInfo label="Sub Region" value={subregion} />
                    <CountryInfo label="Capital" value={capital} />
                  </div>
                  <div className="col">
                    <CountryInfo label="Top Level Domain" value={topLevelDomain} />
                    <CountryInfo
                      label="Currencies"
                      value={currencies.map((currency: Currency) => currency.name).join(', ')}
                    />
                    <CountryInfo
                      label="Languages"
                      value={languages.map((language) => language.name).join(', ')}
                    />
                  </div>
                </div>

                {borders.length > 0 && <BorderCountries borders={borders} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Country;
