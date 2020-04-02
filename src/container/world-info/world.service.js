export function fetchCountry(countryCode) {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
    .then(response => response.json());
}
