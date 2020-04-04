import { request } from '../../helpers/rest-client';

export function findByCountryCode(countryCode) {
  return request(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
}

export function findDetailsByCountryName(countryName) {
  return request(`https://en.wikipedia.org/w/api.php?action=query&titles=${countryName}&format=json&origin=*&prop=extracts&explaintext&exintro&redirects=1`)
    .then(article => article.query.pages[Object.keys(article.query.pages)[0]].extract)
}
