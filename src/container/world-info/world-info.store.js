import { fetchCountry } from './world.service';
import { call, put, takeEvery } from '@redux-saga/core/effects';

const findCountryByCode = '[world] find country by code';

export function FindCountryByCode(code) {
  return {
    type: findCountryByCode,
    payload: code
  };
}

const fetchCountrySuccess = '[world] fetch country success';
const fetchCountryFailed = '[world] fetch country failure';

export function* findCountry(action) {
  try {
    const country = yield call(fetchCountry, action.payload);
    yield put({
      type: fetchCountrySuccess,
      payload: country
    })
  } catch (e) {
    yield put({
      ...action,
      type: fetchCountryFailed,
      error: e
    });
  }
}

export function* countrySaga() {
  yield takeEvery(findCountryByCode, findCountry);
}

export default function CountryReducer(state = {}, action) {
  if (action.type === fetchCountrySuccess) {
    return action.payload;
  } else {
    return state;
  }
}
