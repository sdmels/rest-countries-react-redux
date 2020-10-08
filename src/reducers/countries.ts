import { FETCH_COUNTRIES } from '../actions/countries';
import { Countries } from '../models/countries';

export interface CountiesAction {
  type: typeof FETCH_COUNTRIES;
  countries: Countries[];
}

const countries = (state = [], action: CountiesAction) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return [...state, ...action.countries];
    default:
      return state;
  }
};

export default countries;
