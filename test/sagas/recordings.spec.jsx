import { select, call, put } from 'redux-saga/effects';
import { userLoggedIn } from '../actions/mock.jsx';
import { doFetchRecordings } from '../../src/app/javascript/sagas/recordings.jsx';
import { selectUserInfo, fetchedRecords } from '../../src/app/javascript/sagas/selectors.jsx';
import { fnFetch } from '../../src/app/javascript/services/api';

const dispatch = sinon.spy();
const getState = (state) => ({
  user: userLoggedIn,
});
const iterator = doFetchRecordings();

describe('(Sagas) Recordings', () => {
  it('should dispatch user saga select', () => {
    expect(iterator.next(selectUserInfo).value).to.eql(select(selectUserInfo));
  });
  //
  it('should dispatch user sagas call', () => {
    const fetchUrl = `recording/`;
    expect(iterator.next(getState().user).value).to.eql(call(fnFetch, fetchUrl, getState().user.token))
  });
  it('should dispatch user sagas put', () => {
    expect(iterator.next(fetchedRecords).value).to.eql(put({ type: 'SET_RECORDINGS_LIST', recordings_list: fetchedRecords }))
  });
});
