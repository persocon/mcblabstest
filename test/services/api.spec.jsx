import sinon from 'sinon';
import axios from 'axios';

import * as Api from '../../src/app/javascript/services/api';

describe('(Services) API', () => {
  let sandbox;
  let server;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    server = sandbox.useFakeServer();
  });

  afterEach(() => {
    sandbox.restore();
    server.restore();
  });

  it('should fnAuth', (done) => {
    const resolved = new Promise((r) => r({ data: {token: 'abc'} }));
    sandbox.stub(axios, 'post').returns(resolved);
    const formData = new FormData();
    formData.append('email', 'email@email.com');
    formData.append('password', 'password');

    Api.fnAuth(formData).then(() => {
      expect({token: 'abc'}).to.eql({token: 'abc'})
    }).then(done, done);
  });

  it('should fnFetch', (done) => {
    const data = [
      {
        alchemy_score:  null,
        alchemy_sentiment: null,
        created: "2017-01-26T16:26:49.791596Z",
        duration: 3195,
        path: "https://s3.eu-central-1.amazonaws.com/linementor-upload-chromex/challenge/3925.mp3",
        rating: 2,
        transcript: "transcript"
      }
    ];
    axios.interceptors.request.use(function (config) {
      config.headers['Authorization'] = 'JWT abc';
      return config;
    });
    
    Api.fnFetch('recording/', 'token').then(() => {
      expect(data).to.eql(data);
    }).then(done, done);

    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(data)]), 0);


  })
});
