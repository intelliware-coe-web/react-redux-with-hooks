export function getGlobalStats() {
  const proxy = 'http://localhost:8080';
  return Promise.all([
    'http://health-api.com/api/v1/covid-19/all',
    'http://health-api.com/api/v1/covid-19/total'
  ].map(url => `${proxy}/${url}`)
    .map(url => fetch(url)))
    .then(response => Promise.all(response.map(result => result.json())))
    .then(([countries, totals]) => countries.reduce((map, country) => {
      if (map[country.country_code]) {
        const original = map[country.country_code];
        map[country.country_code] = {
          ...country,
          state: '',
          confirmed: original.confirmed + country.confirmed,
          deaths: original.deaths + country.deaths,
          recovered: original.recovered + country.recovered,
        }
      } else {
        map[country.country_code] = country
      }
      const stats = map[country.country_code];
      stats.confirmed_percentage = stats.confirmed / totals.total_confirmed;

      return map;
    }, {}))
}
