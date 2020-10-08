import { Dispatch } from 'redux';
import { getCountries } from '../API';
import { fetchCountriesSuccess } from './countries';

export const handleInitialData = () => {
  return (dispatch: Dispatch) => {
    getCountries()
      .then((response) => {
        const countries = response.data;

        dispatch(fetchCountriesSuccess(countries));
      })
      .catch((error) => {
        console.log();
      });
  };
};
