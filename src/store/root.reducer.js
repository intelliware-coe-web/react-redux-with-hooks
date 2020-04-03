import { combineReducers } from 'redux';
import country from '../domain/country/country.store';
import covid19 from '../domain/covid-19/covid-19.store'

export const rootReducer = combineReducers({
  country,
  covid19
});
