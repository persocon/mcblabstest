import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as Api from '../services/api';
import { selectUserInfo } from './selectors';

export function* doUserAuth() {
  const { user_info } = yield select(selectUserInfo);

  const fetchUrl = 'auth/';
  const fetchedToken = yield call(Api.fnPost, fetchUrl, user_info);
  console.log(fetchedAuth);
  // yield put({ type: 'SET_CHARACTER_LIST', character_list: fetchedAuth });
}

export function* getUserAuth() {
  yield* takeEvery('SET_CHARACTER_LIST_REQUEST', doUserAuth);
}
