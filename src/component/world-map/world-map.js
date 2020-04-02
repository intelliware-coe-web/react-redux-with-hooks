import React from 'react';
import world from './world.svg';
import SVG from 'react-inlinesvg'
import PropTypes from 'prop-types';

export function WorldMap({onCountryClick}) {
  const mapRef = element => {
    if (onCountryClick) {
      addCountryClickHandlers(element.querySelectorAll("path"), onCountryClick)
    }
  };

  return (
    <SVG src={world} innerRef={mapRef} alt="World Map" data-uk-svg={true} />
  );
}

function addCountryClickHandlers(countryElements, callback) {
  countryElements.forEach(country => {
      const countryCode = country.getAttribute('data-id');
      const countryName = country.getAttribute('data-name');
      country.addEventListener('click', () => callback(countryCode, countryName));
    });
}

WorldMap.propTypes = {
  onCountryClick: PropTypes.func
};
