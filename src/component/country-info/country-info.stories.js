import React from 'react';
import { CountryInfo } from './country-info';
import { object, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Country Info',
  decorators: [withKnobs]
};

const sampleValue = {
  name: 'Canada',
  capital: 'Ottawa',
  population:  37661980,
  nativeName: 'Canada',
  flag: 'https://restcountries.eu/data/can.svg',
  details: 'The true north strong and free!'
};

export const defaultView = () => <CountryInfo country={object("Sample Country", sampleValue)}/>;
