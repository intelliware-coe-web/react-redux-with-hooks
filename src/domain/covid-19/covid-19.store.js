import { call, put, takeEvery } from '@redux-saga/core/effects';

const findAll = '[covid-19] [query] all';

export function LoadCovid19Stats() {
  return {
    type: findAll,
  };
}

const fetchSuccess = '[covid-19] [fetch] [success]';
const fetchFailed = '[covid-19] [fetch] [failure]';

function getAll(findAllStats) {
  return function* (action) {
    try {
      const stats = yield call(findAllStats);

      yield put({
        type: fetchSuccess,
        payload: stats
      });
    } catch (e) {
      yield put({
        ...action,
        type: fetchFailed,
        error: e
      });
    }
  }
}

export function* covid19Saga({getGlobalStats}) {
  yield takeEvery(findAll, getAll(getGlobalStats))
}

export default function Covid19Reducer(state = {}, action) {
  if (action.type === fetchSuccess) {
    return action.payload;
  } else {
    return state;
  }
}
