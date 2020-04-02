import { describeCountry, fetchCountry } from './world.service';
import { all, call, put, takeEvery } from '@redux-saga/core/effects';

const findCountryByCode = '[world] find country by code';

export function FindCountryByCode(code) {
  return {
    type: findCountryByCode,
    payload: code
  };
}

const fetchCountrySuccess = '[world] fetch country success';
const fetchCountryFailed = '[world] fetch country failure';

function* findCountry(action) {
  try {
    const country = yield call(fetchCountry, action.payload);

    yield all([
      put({
        type: findCountryDetailsByName,
        payload: country.name
      }),
      put({
        type: fetchCountrySuccess,
        payload: country
      })
    ]);
  } catch (e) {
    yield put({
      ...action,
      type: fetchCountryFailed,
      error: e
    });
  }
}

const findCountryDetailsByName = '[world] fetch country details';
const fetchCountryDetailsSuccess = '[world] fetch country details success';
const fetchCountryDetailsFailure = '[world] fetch country details failure';

function* findCountryDetails(action) {
  try {
    const description = yield call(describeCountry, action.payload);
    yield put({
      type: fetchCountryDetailsSuccess,
      payload: description
    });
  } catch (e) {
    yield put({
      ...action,
      type: fetchCountryDetailsFailure,
      error: e
    });
  }
}

export function* countrySaga() {
  yield takeEvery(findCountryByCode, findCountry);
  yield takeEvery(findCountryDetailsByName, findCountryDetails);
}

export default function CountryReducer(state = {}, action) {
  switch (action.type) {
    case fetchCountrySuccess:
      return {...state, ...action.payload};
    case fetchCountryDetailsSuccess:
      return {...state, details: action.payload};
    default:
      return state;
  }
}
