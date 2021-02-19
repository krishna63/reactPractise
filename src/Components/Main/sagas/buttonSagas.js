import { put, call, takeEvery } from 'redux-saga/effects';
import { BUTTON_CLICK_ACTION_SUCCESS, INCREMENT_COUNT_ASYNC } from '../actions';

const delay = (ms) => {
  let promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// worker saga
export function* incrementWorker() {
  yield call(delay, 1000);
  yield put({ type: BUTTON_CLICK_ACTION_SUCCESS });
}

// watch saga
export default function* watchIncrementClick() {
  yield takeEvery(INCREMENT_COUNT_ASYNC, incrementWorker);
  yield takeEvery();
}
