import { userLoggedIn } from '../actions/mock.jsx';
import { selectUserInfo } from '../../src/app/javascript/sagas/selectors.jsx';

const getState = (state) => ({
  user: userLoggedIn,
});

describe('(Sagas) Selectors', () => {
  it('should use selector getUserInfo', () => {
    expect(selectUserInfo(getState())).to.eql(userLoggedIn);
  });

});
