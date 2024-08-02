import { all } from 'redux-saga/effects';
import buttonSagas from '../../Components/Main/sagas/buttonSagas';
//console.log(buttonSagas)

export default function* rootSaga() {
  yield all([buttonSagas()]);
}
