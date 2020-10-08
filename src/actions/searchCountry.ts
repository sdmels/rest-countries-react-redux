export const SET_SEARCH_COUNTRY = 'SET_SEARCH_COUNTRY';

export function setSearchCountry(text) {
  return {
    type: SET_SEARCH_COUNTRY,
    text,
  };
}
