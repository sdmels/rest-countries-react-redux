import { combineReducers } from 'redux';
import countries from './countries';
import searchCountry from './searchCountry';
import visibilityFilterForCountry from './visibilityFilter';

export default combineReducers({
  countries,
  text: searchCountry,
  filter: visibilityFilterForCountry,
});
