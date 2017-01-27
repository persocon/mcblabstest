import { userLoggedIn } from './mock';
import * as actions from '../../src/app/javascript/actions/user.jsx';

describe('(Actions) User', () => {

  it('should create an action to setUser', () => {
    const expectedAction = {
      type: 'SET_USER',
  		token: userLoggedIn.token,
    }
    expect(actions.setUser(userLoggedIn.token)).to.eql(expectedAction);
  });

});
