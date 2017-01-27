import { select, call, put } from 'redux-saga/effects';
import { userLoggedIn } from '../actions/mock.jsx';
import { getRecordings } from '../../src/app/javascript/sagas/recordings.jsx';
import { selectUserInfo } from '../../src/app/javascript/sagas/selectors.jsx';
import { fnFetch } from '../../src/app/javascript/services/api';

const dispatch = sinon.spy();
const getState = (state) => ({
  user: userLoggedIn,
});
const iterator = getRecordings();

describe('(Sagas) Recordings', () => {
  // it('should dispatch user saga select', () => {
  //   expect(iterator.next().value).to.eql(select(selectUserInfo));
  // });
  //
  // it('should dispatch user sagas call', () => {
  //   const fetchUrl = `getCharacterList/2/tkrp1986`;
  //   expect(iterator.next(getState().user).value).to.eql(call(fnFetch, fetchUrl))
  // });
  // it('should dispatch user sagas put', () => {
  //   expect(iterator.next(getCharacterList).value).to.eql(put({type: 'SET_CHARACTER_LIST', character_list: getCharacterList}))
  // });
});
