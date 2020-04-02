import React from 'react';
import { WorldMap } from './component/world-map/world-map';

function App() {
  return (
    <div className="uk-grid-match" data-uk-grid={true}>
      <div className="uk-width-2-3@m">
        <div className="uk-card uk-card-default uk-card-body">
          <WorldMap onCountryClick={console.info}/>
        </div>
      </div>
      <div className="uk-width-1-3@m">
        <div className="uk-card uk-card-default uk-card-body">
          Some info about the country
        </div>
      </div>
    </div>
  );
}

export default App;
