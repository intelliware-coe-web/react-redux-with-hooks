import * as countryService from '../domain/country/country.service';
import { countrySaga } from '../domain/country/country.store';
import * as covid19Service from '../domain/covid-19/covid-19.service';
import { covid19Saga } from '../domain/covid-19/covid-19.store';
import { all } from '@redux-saga/core/effects';

export function* rootSaga() {
  yield all([
    countrySaga(countryService),
    covid19Saga(covid19Service)
  ]);
}
