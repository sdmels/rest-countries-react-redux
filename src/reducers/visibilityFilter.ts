import { SET_VISIBILITY_FILTER } from '../actions/visibilityFilter';

export interface VisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filter: string;
}

const visibilityFilterForCountry = (state = '', action: VisibilityFilterAction) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilterForCountry;
