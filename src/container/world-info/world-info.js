import { WorldMap } from '../../component/world-map/world-map';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FindCountryByCode } from './country.store';
import { CountryInfo } from '../../component/country-info/country-info';
import { LoadCovid19Stats } from '../../store/covid-19.store';

export function WorldInfo() {
  const country = useSelector(state => state.country);
  const countryStats = useSelector(state => country.alpha2Code && state.covid19[country.alpha2Code.toUpperCase()]);

  const dispatch = useDispatch();
  const findCountryByCode = code => dispatch(FindCountryByCode(code));
  useEffect(() => { dispatch(LoadCovid19Stats()) }, [dispatch]);

  return (
    <div className="uk-grid-match uk-padding" data-uk-grid={true}>
      <div className="uk-width-2-3@m">
        <div className="uk-card uk-card-default uk-card-body">
          <WorldMap onCountryClick={findCountryByCode}/>
        </div>
      </div>
      <div className="uk-width-1-3@m">
        <div className="uk-card uk-card-default uk-card-body">
          <CountryInfo country={country}/>
          <pre>
            {JSON.stringify(countryStats, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
