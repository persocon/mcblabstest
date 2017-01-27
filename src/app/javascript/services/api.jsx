import fetch from 'isomorphic-fetch';
import axios from 'axios';

const fnFetch = (href, token) => {
  const url = `https://api-dev.linementor.com/core/${href}`;
  const request = axios({
    method: 'get',
    url: url,
    headers: {
      'Authorization': `JWT ${token}`
    }
  })
  return request;
};

const fnAuth = (formData) => {
  const url = `https://api-dev.linementor.com/core/auth/`;
  return fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then((response) => {
    if(response.status === 200) {
      return response.json();
    } else {
      return response.status; // send error back so it can be handle on the form ?!
    }
  })
  .catch((e) =>{
    throw new Error(e.message);
  });
}

export { fnFetch, fnAuth };
