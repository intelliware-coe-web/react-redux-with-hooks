import React from 'react';
import PropTypes from 'prop-types';
import { Details } from '../details/details';

const preStyle = {
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word'
};

export function CountryInfo({country = {}}) {
  return (country.name ? <>
    <img src={country.flag} alt={`Flag of ${country.name}`} className="uk-box-shadow-xlarge"/>
    <h1 className='uk-heading-small'>{country.nativeName}</h1>
    <dl className="uk-description-list">
      <dt>English Name</dt>
      <dd>{country.name}</dd>
      <dt>Capital</dt>
      <dd>{country.capital}</dd>
      <dt>Population</dt>
      <dd>{country.population}</dd>
    </dl>
    <Details>
      <h1 className='uk-heading-small'>{country.name}</h1>
      <pre style={preStyle}>{country.details}</pre>
    </Details>
  </> : null);
}

CountryInfo.propTypes = {
  country: PropTypes.exact({
    name: PropTypes.string,
    capital: PropTypes.string,
    population: PropTypes.string,
    nativeName: PropTypes.string,
    flag: PropTypes.string,
    details: PropTypes.string
  }).isRequired
};
