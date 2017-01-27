import { getRecordings } from './recordings';

export default function* rootSaga() {
  yield [
    getRecordings(),
  ];
}
