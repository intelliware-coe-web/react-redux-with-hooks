import React from 'react';
import { action } from '@storybook/addon-actions';
import { WorldMap } from './world-map';

export default {
  title: 'World Map',
};

export const defaultView = () => <WorldMap onCountryClick={action('clicked')}/>;
