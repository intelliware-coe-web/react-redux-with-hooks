import CountryReducer, { countrySaga, FindCountryByCode } from './country.store';
import { expectSaga } from 'redux-saga-test-plan';

describe('Country Saga', () => {
  it('should save country summary and details', () => {
    const countryService = {
      findByCountryCode: () => Promise.resolve({name: 'Canada'}),
      findDetailsByCountryName: () => Promise.resolve('The true north strong and free!')
    };

    return expectSaga(countrySaga, countryService)
      .withReducer(CountryReducer)
      .dispatch(FindCountryByCode('CA'))
      .hasFinalState({
         name: 'Canada',
         details: 'The true north strong and free!'
      })
      .run(10);
  });

  it('should not save country summary on error', () => {
    const countryService = {
      findByCountryCode: () => Promise.reject(new Error("Can't find country!")),
      findDetailsByCountryName: () => Promise.resolve('The true north strong and free!')
    };

    return expectSaga(countrySaga, countryService)
      .withReducer(CountryReducer)
      .dispatch(FindCountryByCode('CA'))
      .hasFinalState({})
      .run(10);
  });
});

describe('Country Reducer', () => {
  it('should append the country info on country fetched', () => {
    const actual = CountryReducer({name: 'test', details: 'world'}, {
      type: '[country] [fetch] [success]',
      payload: {name: 'hello'}
    });
    expect(actual).toEqual({name: 'hello', details: 'world'});
  });

  it('should append the country details on country details fetched', () => {
    const actual = CountryReducer({name: 'test', details: 'world'}, {
      type: '[country details] [fetch] [success]',
      payload: 'foo'
    });
    expect(actual).toEqual({name: 'test', details: 'foo'});
  });

  it('should do nothing on all other actions', () => {
    const actual = CountryReducer({name: 'test', details: 'world'}, {
      type: 'unknown action',
      payload: 'foo'
    });
    expect(actual).toEqual({name: 'test', details: 'world'});
  });
});
