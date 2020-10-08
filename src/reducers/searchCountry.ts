import { SET_SEARCH_COUNTRY } from '../actions/searchCountry';

export interface SearchCountryAction {
  type: typeof SET_SEARCH_COUNTRY;
  text: string;
}

const searchCountry = (state = '', action: SearchCountryAction) => {
  switch (action.type) {
    case SET_SEARCH_COUNTRY:
      return action.text;
    default:
      return state;
  }
};

export default searchCountry;
