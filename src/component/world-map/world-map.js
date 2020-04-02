import React from 'react';
import world from './world.svg';
import SVG from 'react-inlinesvg'
import PropTypes from 'prop-types';


export function WorldMap({onCountryClick}) {
  let map;
  const mapRef = element => {
    map = element;
  };

  return (
    <SVG src={world} innerRef={mapRef} alt="World Map" data-uk-svg={true}
         onLoad={() => addCountryClickHandler(map, onCountryClick)}/>
  );
}

function addCountryClickHandler(element, callback) {
  element.querySelectorAll('path').forEach(country => {
    const countryCode = country.getAttribute('data-id');
    const countryName = country.getAttribute('data-name');
    country.addEventListener('click', () => callback(countryCode, countryName));
  });
}

WorldMap.propTypes = {
  onCountryClick: PropTypes.func
};
