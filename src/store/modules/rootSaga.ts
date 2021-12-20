import { all } from 'redux-saga/effects';
import weather from './weather/saga';

export default function* rootSaga(): Generator<any> {
  return yield all([weather]);
}
