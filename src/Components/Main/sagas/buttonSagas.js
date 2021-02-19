import {
  put,
  call,
  takeEvery,
} from "redux-saga/effects";
import {BUTTON_CLICK_ACTION_SUCCESS, INCREMENT_COUNT_ASYNC} from "../actions";

const delay = (ms) => {
  let promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms)
  });
}

// worker saga
export function* incrementDecidor() {
  console.log("started delay function")
  yield call(delay, 1000);
  yield put({type: BUTTON_CLICK_ACTION_SUCCESS})
  console.log('---after delay')
}

// watch saga
export default function* watchIncrementClick() {
  console.log("started watch increment click", INCREMENT_COUNT_ASYNC)
  yield takeEvery(INCREMENT_COUNT_ASYNC, incrementDecidor)
}
