import CountryReducer from './country.store';

describe('Country Reducer', () => {
  it('should append the country info on country fetched', () => {
    const actual = CountryReducer({name: 'test', details: 'world'}, {
      type: '[country] [fetch] [success]',
      payload:  { name: 'hello' }
    });
    expect(actual).toEqual({ name: 'hello', details: 'world' });
  });

  it('should append the country details on country details fetched', () => {
    const actual = CountryReducer({name: 'test', details: 'world'}, {
      type: '[country details] [fetch] [success]',
      payload: 'foo'
    });
    expect(actual).toEqual({ name: 'test', details: 'foo' });
  });

  it('should do nothing on all other actions', () => {
    const actual = CountryReducer({name: 'test', details: 'world'}, {
      type: 'unknown action',
      payload: 'foo'
    });
    expect(actual).toEqual({ name: 'test', details: 'world' });
  });
});
