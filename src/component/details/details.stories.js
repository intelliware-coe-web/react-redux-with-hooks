import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Details } from './details';

export default {
  title: 'Details',
  decorators: [withKnobs]
};

export const defaultView = () =>
  <Details text={text('Text', undefined)}>
    <div className="uk-modal-header">
      <h2 className="uk-modal-title">Modal Title</h2>
    </div>
    <div className="uk-modal-body">
      <p>All child contents will go here</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</p>
    </div>
    <div className="uk-modal-footer uk-text-right">
      <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
      <button className="uk-button uk-button-primary" type="button">Save</button>
    </div>
  </Details>;
