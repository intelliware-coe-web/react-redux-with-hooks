import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { axe } from 'jest-axe';
import { CountryInfo } from './country-info';

it('should be accessible', async () => {
  const country = {
    name: 'Canada',
    capital: 'Ottawa',
    population: '37661980',
    nativeName: 'Canada',
    flag: 'https://restcountries.eu/data/can.svg',
    details: 'The true north strong and free!'
  };
  const html = ReactDOMServer.renderToString(<main><CountryInfo country={country}/></main>);
  expect(await axe(html)).toHaveNoViolations();
});
