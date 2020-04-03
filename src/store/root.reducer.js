import { combineReducers } from 'redux';
import country from '../container/world-info/country.store';
import covid19 from './covid-19.store'

export const rootReducer = combineReducers({
  country,
  covid19
});
