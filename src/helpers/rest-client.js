export function proxyUrls(urls) {
  const proxy = 'http://localhost:8080';
  return urls.map(url => `${proxy}/${url}`);
}

export function request(urls) {
  return Promise.all(urls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(payloads => payloads.length > 1 ? payloads : payloads[0])
}
