import { WorldMap } from '../../component/world-map/world-map';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FindCountryByCode } from './world-info.store';

export function WorldInfo() {
  const dispatch = useDispatch();
  const country = useSelector(state => state.country);
  return (
    <div className="uk-grid-match" data-uk-grid={true}>
      <div className="uk-width-2-3@m">
        <div className="uk-card uk-card-default uk-card-body">
          <WorldMap onCountryClick={code => dispatch(FindCountryByCode(code))}/>
        </div>
      </div>
      <div className="uk-width-1-3@m">
        <div className="uk-card uk-card-default uk-card-body">
          <pre>{JSON.stringify(country)}</pre>
        </div>
      </div>
    </div>
  );
}
