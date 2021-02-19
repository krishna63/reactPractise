import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

console.log(rootSaga)
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);

export default store;
