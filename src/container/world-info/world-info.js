import { WorldMap } from '../../component/world-map/world-map';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FindCountryByCode } from './world-info.store';
import { CountryInfo } from '../../component/country-info/country-info';

export function WorldInfo() {
  const country = useSelector(state => state.country);

  const dispatch = useDispatch();
  const findCountryByCode = code => dispatch(FindCountryByCode(code));

  return (
    <div className="uk-grid-match" data-uk-grid={true}>
      <div className="uk-width-2-3@m">
        <div className="uk-card uk-card-default uk-card-body">
          <WorldMap onCountryClick={findCountryByCode}/>
        </div>
      </div>
      <div className="uk-width-1-3@m">
        <div className="uk-card uk-card-default uk-card-body">
          <CountryInfo country={country}/>
        </div>
      </div>
    </div>
  );
}
