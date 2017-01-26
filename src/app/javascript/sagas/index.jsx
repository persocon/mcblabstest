import { getUserAuth } from './user';

export default function* rootSaga() {
  yield [
    getUserAuth(),
  ];
}
