import { getToken } from '../utils/tokenUtils';

export default async function apiMiddleware(url, method, body, headers = {}) {
  const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `token ${await getToken()}`
  };

  if (method === 'POST' || method === 'PUT') {
    return fetch(url, {
      method: method,
      headers: { ...HEADERS, headers },
      body: JSON.stringify(body)
    })
  }
  else if (method === 'GET' || method === 'DELETE') {
    return fetch(url, {
      method: method,
      headers: { ...HEADERS, headers }
    })
  }
}
