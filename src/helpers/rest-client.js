export function proxyUrls(...urls) {
  const proxy = 'http://localhost:8080';
  return urls.map(url => `${proxy}/${url}`);
}

export function request(...urls) {
  return Promise.all(urls.map(fetch)).then(response => response.json());
}
