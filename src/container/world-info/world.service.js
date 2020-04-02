export function fetchCountry(countryCode) {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
    .then(response => response.json());
}

export function describeCountry(countryName) {
  return fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${countryName}&format=json&origin=*&prop=extracts&explaintext&exintro&redirects=1`)
    .then(response => response.json())
    .then(article => article.query.pages[Object.keys(article.query.pages)[0]].extract)
}
