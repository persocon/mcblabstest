import { userLoggedIn } from '../actions/mock.jsx';
import reducer from '../../src/app/javascript/reducers/user.jsx';

describe('(Reducer) User', () => {
  it('should return the initial state', () => {
    const expectedState = {
      token: '',
    }
    expect(reducer(undefined, {})).to.eql(expectedState);
  });

  it('should set user info', () => {
    const expectedState = {
      token: userLoggedIn.token
    };
    expect(
      reducer({
        token: expectedState.token
      }, {
        type: 'SET_USER',
        token: expectedState.token
      })
    ).to.eql({token: expectedState.token});

  });
});
