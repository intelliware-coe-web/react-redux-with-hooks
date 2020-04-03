import { addDecorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import React from 'react';
import '../src/index.scss';

addDecorator(storyfn =>
  <div
    className={`uk-container uk-width-auto ${useDarkMode() ? 'uk-light uk-background-secondary' : 'uk-dark uk-background-muted'}`}>
    {storyfn()}
  </div>
);
