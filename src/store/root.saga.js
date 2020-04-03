import * as countryService from '../service/country.service';
import { countrySaga } from '../container/world-info/country.store';
import * as covid19Service from '../service/covid-19.service';
import { covid19Saga } from './covid-19.store';
import { all } from '@redux-saga/core/effects';

export function* rootSaga() {
  yield all([
    countrySaga(countryService),
    covid19Saga(covid19Service)
  ]);
}
