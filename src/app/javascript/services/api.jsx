import axios from 'axios';

const fnFetch = (href, token) => {
  const url = `https://api-dev.linementor.com/core/${href}`;
  const request = axios({
    method: 'get',
    url,
    headers: {
      Authorization: `JWT ${token}`,
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    return response.status;
  });
  return request;
};

const fnAuth = (formData) => {
  const url = 'https://api-dev.linementor.com/core/auth/';
  return axios.post(url, formData)
  .then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    return response.status; // send error back so it can be handle on the form ?!
  });
};

export { fnFetch, fnAuth };
