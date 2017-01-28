import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as Api from '../services/api';
import { selectUserInfo } from './selectors';

export function* doFetchRecordings() {
  const { token } = yield select(selectUserInfo);
  const fetchUrl = 'recording/';
  const fetchedRecords = yield call(Api.fnFetch, fetchUrl, token);
  yield put({ type: 'SET_RECORDINGS_LIST', recordings_list: fetchedRecords });
}

export function* getRecordings() {
  yield takeEvery('SET_RECORDINGS_LIST_REQUEST', doFetchRecordings);
}
