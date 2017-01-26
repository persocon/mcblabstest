import fetch from 'isomorphic-fetch';

const fnFetch = (href) => {
  const url = `https://api-dev.linementor.com/core/${href}`;
  return fetch(url)
  .then(response => response.json());
};

const fnAuth = (args) => {
  const url = `https://api-dev.linementor.com/core/auth/`;

  const { email, password } = args;

  let formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  return fetch(url, {
    method: 'POST',
    // mode: 'cors',
    body: formData,
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    debugger;
  })
  .catch((e) =>{
    throw new Error(e.message);
  });
}

export { fnFetch, fnAuth };
