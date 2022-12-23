export const host = `${process.env.REACT_APP_REST_SCHEME}://${process.env.REACT_APP_REST_HOST}${process.env.REACT_APP_SERVER_ENDPOINT_PREFIX}`;

export const request = async (endpoint, method, body) => {
  const response = await fetch(`${host}${endpoint}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify(body),
  });
  const status = response.status;
  switch (status) {
    case 200:
      const data = await response.json();
      return data;
    default:
      return {};
  }
}

export const requestPost = async (endpoint, body) => {
  return request(endpoint, 'POST', body);
}