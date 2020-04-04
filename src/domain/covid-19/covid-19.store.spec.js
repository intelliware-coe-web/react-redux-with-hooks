import { expectSaga } from 'redux-saga-test-plan';
import Covid19Reducer, { covid19Saga, LoadCovid19Stats } from './covid-19.store';

describe('Covid-19 Saga', () => {
  const initialState = Symbol();

  it('should save global stats on success', () => {
    const stats = Symbol();
    const covid19Service = {
      getGlobalStats: () => Promise.resolve(stats)
    };

    return expectSaga(covid19Saga, covid19Service)
      .withReducer(Covid19Reducer)
      .withState(initialState)
      .hasFinalState(stats)
      .dispatch(LoadCovid19Stats())
      .run(50);
  });

  it('should not save global stats on failure', () => {
    const covid19Service = {
      getGlobalStats: () => Promise.reject()
    };

    return expectSaga(covid19Saga, covid19Service)
      .withReducer(Covid19Reducer)
      .withState(initialState)
      .hasFinalState(initialState)
      .dispatch(LoadCovid19Stats())
      .run(50);
  });
});
