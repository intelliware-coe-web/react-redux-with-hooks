import * as countryService from '../service/country.service';
import { countrySaga } from '../container/world-info/world-info.store';
import { all } from '@redux-saga/core/effects';

export function* rootSaga() {
  yield all([
    countrySaga(countryService)
  ]);
}
