import React from 'react';
import { WorldMap } from './world-map';

describe('World map component', () => {
  it('should render', () => {
    const onCountryClick = jest.fn();
    const tree = WorldMap({onCountryClick});
    expect(tree).toMatchSnapshot();
  });
});
