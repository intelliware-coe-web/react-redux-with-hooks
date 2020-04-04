import { proxyUrls, request } from '../../helpers/rest-client';

export function getGlobalStats() {
  const sources = [
      'http://health-api.com/api/v1/covid-19/all',
      'http://health-api.com/api/v1/covid-19/total'
    ];

  return request(proxyUrls(sources))
    .then(([countries, totals]) => countries.reduce(indexStatsByCountryCode(totals), {}));
}

function indexStatsByCountryCode(totals) {
  return function indexStatsByCountryCode(indexedStats, countryStats) {
    const countryCode = countryStats.country_code;
    indexedStats[countryCode] = indexedStats[countryCode] ?
      mergeStats(indexedStats[countryCode], countryStats) : countryStats;

    const stats = indexedStats[countryCode];
    stats.confirmed_percentage = stats.confirmed / totals.total_confirmed;

    return indexedStats;
  }
}

function mergeStats(stat1, stat2) {
  return {
    ...stat1,
    state: '',
    confirmed: stat1.confirmed + stat2.confirmed,
    deaths: stat1.deaths + stat2.deaths,
    recovered: stat1.recovered + stat2.recovered
  }
}
