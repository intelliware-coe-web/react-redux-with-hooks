import { all, call, put, takeEvery } from '@redux-saga/core/effects';

const findCountryByCode = '[country] [query] by code';

export function FindCountryByCode(code) {
  return {
    type: findCountryByCode,
    payload: code
  };
}

const fetchCountrySuccess = '[country] [fetch] [success]';
const fetchCountryFailed = '[country] [fetch] [failure]';

function getCountrySummary(findByCountryCode) {
  return function* findCountry(action) {
    try {
      const country = yield call(findByCountryCode, action.payload);

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
}

const findCountryDetailsByName = '[country details] [query]';
const fetchCountryDetailsSuccess = '[country details] [fetch] [success]';
const fetchCountryDetailsFailure = '[country details] [fetch] [failure]';

function getCountryDetails(findDetailsByCountryName) {
  return function* findCountryDetails(action) {
    try {
      const description = yield call(findDetailsByCountryName, action.payload);
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
}

export function* countrySaga({findByCountryCode, findDetailsByCountryName}) {
  yield takeEvery(findCountryByCode, getCountrySummary(findByCountryCode));
  yield takeEvery(findCountryDetailsByName, getCountryDetails(findDetailsByCountryName));
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
