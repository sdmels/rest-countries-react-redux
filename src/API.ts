import axios from 'axios';

export const getCountries = () => {
  return axios.get(
    `https://restcountries.com/v2/all?fields=alpha3Code,topLevelDomain,name,capital,region,population,flag,subregion,nativeName,currencies,languages,borders,alpha2Code`,
  );
};
